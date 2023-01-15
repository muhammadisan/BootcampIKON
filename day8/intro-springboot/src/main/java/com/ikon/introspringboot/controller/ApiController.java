package com.ikon.introspringboot.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
public class ApiController {
    @GetMapping("/v1/messages")
    public String getHello() {
        log.info("[isan] /v1/messages GetHello() is called");
        return "Hello World";
    }

    @PostMapping("/v1/messages")
    public String postHello() {
        log.info("[isan] /v1/messages postHello() is called");
        return "Hello World";
    }

    @DeleteMapping("/v1/messages")
    public String deleteHello() {
        log.info("[isan] /v1/messages deleteHello() is called");
        return "Hello World";
    }
}
