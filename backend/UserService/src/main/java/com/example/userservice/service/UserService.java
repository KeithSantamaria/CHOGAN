package com.example.userservice.service;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.example.userservice.model.User;
import com.example.userservice.repository.UserRepo;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;

@Log4j2
@Service
public class UserService {
    @Autowired
    private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Autowired
    private UserRepo userRepository;

//    public void clear() { dao.clear(); }

    public User newUser(User user) {
        if(user.getId() == null) {
            try {
                passwordEncoder.encode(user.getPassword());
                passwordEncoder.encode(user.getSecurityAnswer());
                return userRepository.save(user);
            } catch (Exception exception) {
                return null;
            }
        } else {
            return null;
        }
    }

    public User updateUser(User user) {
        if(user.getId() == null) {
            return null;
        } else {
            try {
                passwordEncoder.encode(user.getPassword());
                passwordEncoder.encode(user.getSecurityAnswer());
                return userRepository.save(user);
            } catch (Exception exception) {
                return null;
            }
        }
    }

    public User setFullName(String username, String firstName, String lastName) {
        User user = userRepository.findByUsername(username);
        user.setFirstName(firstName);
        user.setLastName(lastName);
        return userRepository.save(user);
    }

    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public User getUserById(String Id) {
        return userRepository.findById(Id);
    }

    public boolean userLogIn(String username, String password) {
        User user = userRepository.findByUsername(username);
        return( user != null && user.getPassword().equals(password)) ? true : false;
    }

    public User changePassword(String Id, String newPassword, String response) {
        if (checkSecurityQuestion(Id, response)) {
            User user = userRepository.findById(Id);
            user.setPassword(newPassword);
            return userRepository.save(user);
        }
        else return null;
    }

    public boolean checkSecurityQuestion(String Id, String response) {
        User user = userRepository.findById(Id);
        return (user.getSecurityAnswer().equals(response) ? true : false);
    }


}
