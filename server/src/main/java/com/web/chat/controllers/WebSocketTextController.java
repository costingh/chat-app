package com.web.chat.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class WebSocketTextController {

    @Autowired
    SimpMessagingTemplate template;

    @MessageMapping("/send/{conversationId}")
    @SendTo("/topic/{conversationId}")
    public String sendMessage(@Payload String message) {
        return message;
    }
}
