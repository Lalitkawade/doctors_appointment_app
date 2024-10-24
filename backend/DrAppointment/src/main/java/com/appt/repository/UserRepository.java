package com.appt.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.appt.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}
