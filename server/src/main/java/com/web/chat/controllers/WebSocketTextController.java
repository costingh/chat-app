package com.web.chat.controllers;

import com.web.chat.models.Message;
import com.web.chat.payload.request.MessageRequest;
import com.web.chat.repository.MessageRepository;
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

    @Autowired
    MessageRepository messageRepository;

    @MessageMapping("/send/{conversationId}")
    @SendTo("/topic/{conversationId}")
    public Message sendMessage(@Payload MessageRequest message) {
        Message newMessage = new Message(
                message.getConversationId(),
                message.getFrom(),
                message.getTo(),
                message.getBody()
        );

        messageRepository.save(newMessage);

        return newMessage;
    }

    @MessageMapping("/send/online-user")
    @SendTo("/topic/online-user")
    public String connectUser(@Payload String onlineUserId) {
        return onlineUserId;
    }

    @MessageMapping("/send/disconnect-user")
    @SendTo("/topic/disconnect-user")
    public String disconnectUser(@Payload String onlineUserId) {
        return onlineUserId;
    }
}
