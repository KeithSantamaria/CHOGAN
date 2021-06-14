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
    private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Autowired
    private UserRepo userRepository;

//    public void clear() { dao.clear(); }

    public User newUser(User user) {
        if(user.getId() == null) {
            log.info("IN THE IF STATEMENT:" + user);
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            user.setSecurityAnswer(passwordEncoder.encode(user.getSecurityAnswer()));
            return userRepository.save(user);
//            try {
//                log.info("IN THE TRY STATEMENT");
//                user.setPassword(passwordEncoder.encode(user.getPassword()));
//                user.setSecurityAnswer(passwordEncoder.encode(user.getSecurityAnswer()));
//                log.info("AFTER HASHING:" + user);
//                return userRepository.save(user);
//            } catch (Exception exception) {
//                log.info("AFTER EXCEPTION");
//                return null;
//            }
        } else {
            log.info("IN THE ELSE");
            return null;
        }
    }

    public User updateUser(User user) {
        System.out.println(user.toString());
        if(user.getId() == null) {
            return null;
        } else {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            user.setSecurityAnswer(passwordEncoder.encode(user.getSecurityAnswer()));
            return userRepository.save(user);
        }
    }

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public User getUserById(String Id) {
        return userRepository.findById(Id).orElse(null);
    }

    public User userLogIn(String email, String password) {
        User user = userRepository.findByEmail(email);
        log.info("USER in LOGIN " + user.toString());
        log.info( "INPUT PASS " + passwordEncoder.encode(password) );
        log.info( "FETECHED PASS " + user.getPassword());
        log.info("SHOULD BE TRUE NULL:" + (user != null ) );
        return( user != null && passwordEncoder.matches(password, user.getPassword())) ? user : null;
    }

    public User changePassword(String Id, String newPassword, String response) {
        if (checkSecurityQuestion(Id, response)) {
            User user = userRepository.findById(Id).orElse(null);
            user.setPassword(newPassword);
            return userRepository.save(user);
        }
        else return null;
    }

    public boolean checkSecurityQuestion(String Id, String response) {
        User user = userRepository.findById(Id).orElse(null);
        return (user.getSecurityAnswer().equals(response) ? true : false);
    }


}
