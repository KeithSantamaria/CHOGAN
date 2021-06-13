package com.example.userservice;

import com.example.userservice.model.User;
import com.example.userservice.repository.UserRepo;
import com.example.userservice.service.UserService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.util.Assert;
import org.springframework.util.SocketUtils;

import static org.springframework.test.util.AssertionErrors.*;


@ExtendWith(MockitoExtension.class)
public class UserServiceTests {

    @Mock
    private UserRepo userRepository;

    @Autowired
    @InjectMocks
    UserService userService;
    private PasswordEncoder passwordEncoder;
    private User testUser;

    @BeforeEach
    void setup() {
        testUser = new User();
        passwordEncoder = new BCryptPasswordEncoder();
    }

    @Test
    void testNewUser() {
        testUser.setPassword("123");
        testUser.setSecurityAnswer("123");
        Mockito.when(userRepository.save(testUser)).thenReturn(testUser);
        User user = userService.newUser(testUser);
        Assertions.assertEquals(testUser, user);
    }

    @Test
    void testFailNewUser() {
        testUser.setId("test");
        User user = userService.newUser(testUser);
        Assertions.assertNotEquals(testUser, user);
    }

    @Test
    void testNewUserException() {
        User user = userService.newUser(testUser);
        Assertions.assertEquals(null, user);
    }

    @Test
    void testUpdateUser() {
        testUser.setId("test");
        testUser.setPassword("test");
        testUser.setEmail("test");
        testUser.setSecurityQuestionId(1);
        testUser.setSecurityAnswer("Banana");
        User userOne = testUser;
        userOne.setPassword("Password");
        userOne.setEmail("Email");
        userOne.setSecurityQuestionId(2);
        userOne.setSecurityAnswer("Apple");
        Mockito.when(userRepository.save(userOne)).thenReturn(userOne);
        User userTwo = userService.updateUser(userOne);
        Assertions.assertNotEquals("test", userTwo.getPassword());
        Assertions.assertNotEquals("test", userTwo.getEmail());
        Assertions.assertNotEquals(1, userTwo.getSecurityQuestionId());

    }

    @Test
    void testUpdateUserFail() {
        User user = userService.updateUser(testUser);
        Assertions.assertNull(user);
    }

    @Test
    void testUpdateUserException() {
        testUser.setId("test");
        User user = userService.updateUser(testUser);
        Assertions.assertNull(user);
    }

    @Test
    void testGetUserByUsername() {
        testUser.setEmail("test");
        Mockito.when(userRepository.findByEmail("test")).thenReturn(testUser);
        User testUser = userService.getUserByEmail("test");
        Assertions.assertNotNull(testUser);
    }

    @Test
    void testGetUserById() {
        testUser.setId("test");
        Mockito.when( userRepository.findById( testUser.getId() ) ).thenReturn( java.util.Optional.of(testUser) );
        User testUser = userService.getUserById("test");
        Assertions.assertNotNull(testUser);
    }

    @Test
    void testUserLogIn() {
        testUser.setEmail("User");
        testUser.setPassword("Password");
        testUser.setPassword( passwordEncoder.encode(testUser.getPassword()) );
        Mockito.when(userRepository.findByEmail("User")).thenReturn(testUser);
        User testUser = userService.userLogIn("User", "Password");
        Assertions.assertNotNull(testUser);
    }

    @Test
    void testChangePassword() {
        testUser.setId("test");
        testUser.setSecurityAnswer("Answer");
        Mockito.when( userRepository.findById( "test" ) ).thenReturn( java.util.Optional.of(testUser) );
        Mockito.when(userRepository.save(testUser)).thenReturn(testUser);
        User user = userService.changePassword("test", "Password", "Answer");
        Assertions.assertEquals("Password", user.getPassword());
        Assertions.assertEquals("Answer", user.getSecurityAnswer());
    }

    @Test
    void testFailChangePassword() {
        testUser.setId("test");
        testUser.setSecurityAnswer("NotAnAnswer");
        Mockito.when( userRepository.findById( "test" ) ).thenReturn( java.util.Optional.of(testUser) );
        User user = userService.changePassword("test", "Password", "Answer");
        Assertions.assertNull(user);
    }

    @Test
    void testCheckSecurityQuestion() {
        testUser.setId("test");
        testUser.setSecurityAnswer("Answer");
        Mockito.when( userRepository.findById( "test" ) ).thenReturn( java.util.Optional.of(testUser) );
        boolean test = userService.checkSecurityQuestion("test","Answer");
        Assertions.assertTrue(test);
    }

}
