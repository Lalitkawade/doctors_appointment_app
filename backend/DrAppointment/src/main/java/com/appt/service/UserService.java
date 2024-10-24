package com.appt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.appt.entity.Role;
import com.appt.entity.User;
import com.appt.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User createUser(User user, String roleName) {
        user.setPassword("password");
        Role role = new Role();
        role.setName(roleName);
        user.getRoles().add(role);
        return userRepository.save(user);
    }

    // Additional methods as needed
}
