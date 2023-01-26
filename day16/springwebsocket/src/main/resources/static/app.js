var stompClient = null;

function setConnected(connected) {
    $("#connect").prop("disabled", connected);
    $("#disconnect").prop("disabled", !connected);
    if (connected) {
        $("#conversation").show();
    }
    else {
        $("#conversation").hide();
    }
    $("#greetings").html("");
}

function connect() {
    var socket = new SockJS('/gs-guide-websocket');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        setConnected(true);

        stompClient.subscribe('/topic/chatroom', function (greeting) {
            showMessages(JSON.parse(greeting.body).content);
        });

    });
}

function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    setConnected(false);
}

function sendMessage(id) {
    stompClient.send("/app/endpointPerson", {}, JSON.stringify({'messageContent': id + " " + $("#message"+id).val()}));
    $("#message"+id).val("");
}

function showMessages(message) {
    console.log(message.split())
    let id = message.split(" ")[0];
    let pesan = message.substring(2);
    if(id == "1") {
        $("#messages").append("<tr><td><span style='color: blue'>Anda: </span>" + pesan + "</td></tr>");
    }
    if(id == "2") {
        $("#messages").append("<tr><td><span style='color: red'>Budi: </span>" + pesan + "</td></tr>");
    }
    if(id == "3") {
        $("#messages").append("<tr><td><span style='color: red'>Cindi: </span>" + pesan + "</td></tr>");
    }
}

$(function () {
    $("form").on('submit', function (e) {
        e.preventDefault();
    });
    $( "#connect" ).click(function() { connect(); });
    $( "#disconnect" ).click(function() { disconnect(); });
    $( "#sendButtonPerson1" ).click(function() { sendMessage(1); });
    $( "#sendButtonPerson2" ).click(function() { sendMessage(2); });
    $( "#sendButtonPerson3" ).click(function() { sendMessage(3); });
});
