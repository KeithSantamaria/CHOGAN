package com.example.userservice;

import com.example.userservice.controller.UserController;
import com.example.userservice.model.User;
import com.example.userservice.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentMatchers;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@WebMvcTest(UserController.class)
public class UserControllerTests {

	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private UserService userService;

	private User testUser;
	private ObjectMapper objectMapper;

	@BeforeEach
	void beforeEachTest(){
		testUser = new User();
		testUser.setFirstName("testFirstName");
		testUser.setLastName("testLastName");
		testUser.setUsername("testUsername");
		testUser.setPassword("testPassword");
		testUser.setEmail("testEmail");
		testUser.setSecurityQuestionId(1);
		testUser.setSecurityAnswer("CHOGAN");
		objectMapper = new ObjectMapper();
	}

	@Test
	public void shouldCreateUser()  throws  Exception{
		String jsonString = objectMapper.writeValueAsString(testUser);
		Mockito.when(userService.newUser(ArgumentMatchers.any())).thenReturn(testUser);

		this.mockMvc.perform( post("/user")
			.contentType(MediaType.APPLICATION_JSON)
			.content(jsonString) )
			.andExpect(status().isOk());
	}

	@Test
	public void shouldNotCreateUser() throws Exception {
		String jsonString = objectMapper.writeValueAsString(testUser);
		Mockito.when(userService.newUser(ArgumentMatchers.any())).thenReturn(null);

		this.mockMvc.perform( post("/user")
			.contentType(MediaType.APPLICATION_JSON)
			.content(jsonString) )
			.andExpect(status().isBadRequest());

	}

}
