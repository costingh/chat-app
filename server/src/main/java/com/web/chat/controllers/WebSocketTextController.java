package com.web.chat.controllers;

import com.web.chat.models.Message;
import com.web.chat.models.User;
import com.web.chat.payload.request.MessageRequest;
import com.web.chat.payload.request.OnlineUserRequest;
import com.web.chat.repository.MessageRepository;
import com.web.chat.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class WebSocketTextController {

    @Autowired
    SimpMessagingTemplate template;

    @Autowired
    MessageRepository messageRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    MongoTemplate mongoTemplate;

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
    public String connectUser(@Payload OnlineUserRequest onlineUserRequest) {
        Optional<User> user = userRepository.findById(onlineUserRequest.getUserId());

        if(user.isPresent()) {
            user.get().setStatus("online");
            userRepository.save(user.get());
        }
        return onlineUserRequest.getUserId();
    }

    @MessageMapping("/send/disconnect-user")
    @SendTo("/topic/disconnect-user")
    public String disconnectUser(@Payload OnlineUserRequest onlineUserRequest) {
        Optional<User> user = userRepository.findById(onlineUserRequest.getUserId());

        if(user.isPresent()) {
            user.get().setStatus("offline");
            userRepository.save(user.get());
        }
        return onlineUserRequest.getUserId();
    }
}
