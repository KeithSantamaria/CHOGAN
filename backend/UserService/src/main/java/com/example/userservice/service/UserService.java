package com.example.userservice.service;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.example.userservice.model.User;
import com.example.userservice.repository.UserRepo;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

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
            log.info("ATTEMPTING TO CREATE USER");
            if ( user.getPassword() != null || user.getEmail() != null || user.getSecurityAnswer() != null ){
                log.info("ATTEMPTING TO ENCRYPT SENSITIVE INFORMATION");
                user.setPassword(passwordEncoder.encode(user.getPassword()));
                user.setSecurityAnswer(passwordEncoder.encode(user.getSecurityAnswer()));
                log.info("ATTEMPTING SAVING NEW USER");
                return userRepository.save(user);
            } else {
                log.info("ABORTING CREATION: INVALID USER");
                return null;
            }
        } else {
            log.info("ABORTING CREATION: USER ALREADY EXISTS");
            return null;
        }
    }

    public User updateUser(User user) {
        if(user.getId() == null) {
            log.info("ABORTING UPDATE: USER DOES NOT EXIST");
            return null;
        } else {
            //this should always be true, not clean but sometimes you gotta get dirty
            User currentUser = userRepository.findById(user.getId()).orElse(null) ;

            if ( user.getPassword() == null){
                user.setPassword( currentUser.getPassword());
            }
            if (user.getSecurityAnswer() == null){
                user.setSecurityAnswer( currentUser.getSecurityAnswer() );
            }

            log.info("USER in LOGIN " + currentUser.toString());
            log.info("ATTEMPTING SAVING UPDATED USER");
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
