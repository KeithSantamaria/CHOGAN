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
    /**
     * creates a new password encoder using the BCrypt Function
     */
    @Autowired
    private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Autowired
    private UserRepo userRepository;

//    public void clear() { dao.clear(); }

    /**
     * attempts to create a new user to the database
     * @param user New User object to be created
     * @return Returns null or call the User Repository save function that
     */
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

    /**
     * check if user exists or not, if they don't, return null else check if user password and/or
     * security answer exist, they don't set encrypted pass
     * @param user takes in a User object
     * @return null or call userRepository save function
     */
    public User updateUser(User user) {
        System.out.println(user.toString());
        if(user.getId() == null) {
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

    /**
     * @param email email of user
     * @return call userRepository findByEmail function
     */
    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    /**
     *
     * @param Id of user
     * @return call userRepository findById function
     */
    public User getUserById(String Id) {
        return userRepository.findById(Id).orElse(null);
    }

    /**
     * Checks if user exists by email and matches the raw password to the encoded one in the database
     * @param email email of user
     * @param password password of user
     * @return user or null
     */

    public User userLogIn(String email, String password) {
        User user = userRepository.findByEmail(email);
        log.info("USER in LOGIN " + user.toString());
        log.info( "INPUT PASS " + passwordEncoder.encode(password) );
        log.info( "FETECHED PASS " + user.getPassword());
        log.info("SHOULD BE TRUE NULL:" + (user != null ) );
        return( user != null && passwordEncoder.matches(password, user.getPassword())) ? user : null;
    }

    /**
     * Change password of the user
     * @param Id ID of the user
     * @param newPassword new password to be entered
     * @param response new response for the security question
     * @return null or call userRepository save function
     */

    public User changePassword(String Id, String newPassword, String response) {
        if (checkSecurityQuestion(Id, response)) {
            User user = userRepository.findById(Id).orElse(null);
            user.setPassword(newPassword);
            return userRepository.save(user);
        }
        else return null;
    }

    /**
     * Check if security answer equals user response
     * @param Id id of user
     * @param response response of user
     * @return true or not
     */
    public boolean checkSecurityQuestion(String Id, String response) {
        User user = userRepository.findById(Id).orElse(null);
        return (user.getSecurityAnswer().equals(response) ? true : false);
    }


}
