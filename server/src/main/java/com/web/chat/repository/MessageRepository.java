package com.web.chat.repository;

import com.web.chat.models.Message;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface MessageRepository extends MongoRepository<Message, String> {
    Optional<Message> findById(String id);
}
