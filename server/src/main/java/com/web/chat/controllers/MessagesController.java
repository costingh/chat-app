package com.web.chat.controllers;

import com.web.chat.models.Message;
import com.web.chat.repository.ConversationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/messages")
public class MessagesController {

    @Autowired
    private ConversationRepository conversationRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    @GetMapping("/all-messages/{conversationId}")
    public List<Message> allMessagesFromConversation(@PathVariable String conversationId) {
        Query query = new Query();
        query.addCriteria(Criteria.where("conversationId").is(conversationId));
        List<Message> messages = mongoTemplate.find(query, Message.class);
        return messages;
    }

    @GetMapping("/last-message/{conversationId}")
    public Message lastMessageFromConversation(@PathVariable String conversationId) {
        Query query = new Query();
        query.addCriteria(Criteria.where("conversationId").is(conversationId));
        List<Message> messages = mongoTemplate.find(query, Message.class);
        return messages.get(messages.size()-1);
    }
}


