package com.projectservice.controller;

import com.projectservice.models.UserStory;
import com.projectservice.services.IUserStoryService;
import com.projectservice.services.UserStoryService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

public class UserStoryControllerTest {

    private final IUserStoryService userStoryService = Mockito.mock(UserStoryService.class);

    private final UserStoryController userStoryController = new UserStoryController(userStoryService);

    /*
    *
    * Create
    *
    * */

    @Test
    void createNewUserStorySuccessTest(){
        UserStory userStory = new UserStory();

        ResponseEntity<List<UserStory>> response = userStoryController.createNewUserStory(userStory);

        Assertions.assertEquals(response.getStatusCode(), HttpStatus.OK);
    }

    @Test
    void createNewUserStoryFailureTest(){
        UserStory userStory = new UserStory();

        Mockito.doThrow(new Exception());

        ResponseEntity<List<UserStory>> response = userStoryController.createNewUserStory(userStory);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    /*
    *
    * Read
    *
    * */

    @Test
    void readUserStorySuccessTest(){
        String userStoryId = "Id";
        UserStory userStory = new UserStory();

        Mockito.when(userStoryService.findByUserStoryId(userStoryId)).thenReturn(userStory);

        ResponseEntity<UserStory> response = userStoryController.readUserStory(userStoryId);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.OK);
    }

    @Test
    void readUserStoryFailureTest(){
        String userStoryId = "Id";

        Mockito.when(userStoryService.findByUserStoryId(userStoryId)).thenReturn(null);

        ResponseEntity<UserStory> response =userStoryController.readUserStory(userStoryId);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Test
    void readUserStoriesTest(){
        String projectId = "Id";
        List<UserStory> list = new ArrayList<>();
        list.add(new UserStory());

        Mockito.when(userStoryService.findByProjectId(projectId)).thenReturn(list);

        ResponseEntity<List<UserStory>> response = userStoryController.readUserStories(projectId);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.OK);
    }


    /*
    *
    * Update
    *
    * */

    @Test
    void updateUserStorySuccessTest(){
        UserStory userStory = new UserStory();

        Mockito.when(userStoryService.updateUserStory(userStory)).thenReturn(userStory);

        ResponseEntity<List<UserStory>> response = userStoryController.updateUserStory(userStory);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.OK);
    }

    @Test
    void updateUserStoryFailureTest(){
        UserStory userStory = new UserStory();

        Mockito.when(userStoryService.updateUserStory(userStory)).thenReturn(null);

        ResponseEntity<List<UserStory>> response = userStoryController.updateUserStory(userStory);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    /*
    *
    * Delete
    *
    * */
}
