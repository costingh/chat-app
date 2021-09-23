package com.web.chat.repository;

import java.util.Optional;

import com.web.chat.models.ERole;
import com.web.chat.models.Role;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RoleRepository extends MongoRepository<Role, String> {
    Optional<Role> findByName(ERole name);
}
