package com.web.chat.repository;

import com.web.chat.models.Conversations;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface ConversationRepository extends MongoRepository<Conversations, String> {
    Optional<Conversations> findById(String id);
}
