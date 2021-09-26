package com.web.chat.controllers;

import com.web.chat.models.Conversations;
import com.web.chat.payload.request.ConversationRequest;
import com.web.chat.repository.ConversationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
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
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public List<Conversations> allConversations() {
        return conversationRepository.findAll();
    }

    @PostMapping("/add")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public Conversations addConversation(@RequestBody ConversationRequest conversation) {
        Conversations conversations = new Conversations(
                conversation.getParticipantOneId(),
                conversation.getParticipantTwoId()
        );

        conversationRepository.save(conversations);
        return conversations;
    }

    @GetMapping("/all/{userId}")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public List<Conversations> addConversation(@PathVariable Conversations userId) {
        Query query = new Query();
        List<Criteria> criteria = new ArrayList<>();

        // find all conversations in which the current user is a participant
        criteria.add(Criteria.where("participantOneId").is(userId));
        criteria.add(Criteria.where("participantTwoId").is(userId));

        query.addCriteria(new Criteria().andOperator(criteria.toArray(new Criteria[criteria.size()])));

        List<Conversations> conversations = mongoTemplate.find(query, Conversations.class);
        return conversations;
    }

    @GetMapping("/{conversationId}")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public Optional<Conversations> getConversation(@PathVariable String conversationId) {
        Optional<Conversations> conversations = conversationRepository.findById(conversationId);
        return conversations;
    }

    @DeleteMapping("/delete/{conversationId}")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public String deleteConversation(@PathVariable Conversations conversationId) {
        conversationRepository.delete(conversationId);
        return "Conversation has been deleted successfully!";
    }
}

