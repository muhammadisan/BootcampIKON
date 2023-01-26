package com.muhammadisan.springwebsocket.controller;

import com.muhammadisan.springwebsocket.dto.Chat;
import com.muhammadisan.springwebsocket.dto.Message;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

@Controller
public class ChatController {
    @MessageMapping("/endpointPerson") // endpoint of individual person
    @SendTo("/topic/chatroom") // server send message to chatroom
    public Chat greeting(Message message) throws Exception {
        return new Chat(HtmlUtils.htmlEscape(message.getMessageContent()));
    }
}