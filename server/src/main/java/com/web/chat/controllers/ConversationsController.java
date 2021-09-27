package com.web.chat.controllers;

import com.web.chat.models.Conversations;
import com.web.chat.payload.request.ConversationRequest;
import com.web.chat.repository.ConversationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/conversation")
public class ConversationsController {

    @Autowired
    ConversationRepository conversationRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    @GetMapping("/all")
    public List<Conversations> allConversations() {
        return conversationRepository.findAll();
    }

    @PostMapping("/add")
    public Conversations addConversation(@RequestBody ConversationRequest conversation) {
//        Conversations conversations = new Conversations(
//                conversation.getParticipantOneId(),
//                conversation.getParticipantTwoId()
//        );
        Date createdAt = new Date();
        Conversations conversations = new Conversations();
        conversations.setParticipantOneId(conversation.getParticipantOneId());
        conversations.setParticipantTwoId(conversation.getParticipantTwoId());
        conversations.setCreatedDate(createdAt);

        conversationRepository.save(conversations);
        return conversations;
    }

    @GetMapping("/all/{userId}")
    public List<Conversations> addConversation(@PathVariable String userId) {
        Query query = new Query();
        List<Criteria> criteria = new ArrayList<>();

        // find all conversations in which the current user is a participant
        criteria.add(Criteria.where("participantOneId").is(userId));
        criteria.add(Criteria.where("participantTwoId").is(userId));

        query.addCriteria(new Criteria().orOperator(criteria.toArray(new Criteria[criteria.size()])));

        List<Conversations> conversations = mongoTemplate.find(query, Conversations.class);
        return conversations;
    }

    @GetMapping("/{conversationId}")
    public Optional<Conversations> getConversation(@PathVariable String conversationId) {
        Optional<Conversations> conversations = conversationRepository.findById(conversationId);
        return conversations;
    }

    @DeleteMapping("/delete/{conversationId}")
    public String deleteConversation(@PathVariable Conversations conversationId) {
        conversationRepository.delete(conversationId);
        return "Conversation has been deleted successfully!";
    }
}

