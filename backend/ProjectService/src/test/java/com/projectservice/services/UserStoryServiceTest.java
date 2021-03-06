package com.projectservice.services;

import com.projectservice.models.UserStory;
import com.projectservice.repository.UserStoryRepo;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.ArrayList;
import java.util.List;


public class UserStoryServiceTest {

    private final UserStoryRepo userStoryRepo = Mockito.mock(UserStoryRepo.class);

    private final UserStoryService userStoryService = new UserStoryService(userStoryRepo);

    /*
    *
    * Create
    *
    * */

    @Test
    void insertTest(){
        UserStory userStory = new UserStory();
        userStoryService.insert(userStory);
    }

    /*
    *
    * Read
    *
    * */

    @Test
    void findByUserStoryIdTest(){
        String userStoryId = "Id";
        UserStory userStory = new UserStory();

        Mockito.when(userStoryRepo.findByUserStoryId(userStoryId)).thenReturn(userStory);

        UserStory foundUserStory = userStoryService.findByUserStoryId(userStoryId);

        Assertions.assertEquals(foundUserStory,userStory);
    }

    @Test
    void findByProjectIdTest(){
        String projectId = "Id";
        List<UserStory> list = new ArrayList<>();
        list.add(new UserStory());

        Mockito.when(userStoryRepo.findByProjectId(projectId)).thenReturn(list);

        List<UserStory> foundList = userStoryService.findByProjectId(projectId);

        Assertions.assertEquals(foundList,list);
    }

    /*
    *
    * Update
    *
    * */

    @Test
    void updateUserStoryTest(){
        UserStory userStory = new UserStory();

        Mockito.when(userStoryRepo.save(userStory)).thenReturn(userStory);

        UserStory foundUserStory = userStoryService.updateUserStory(userStory);

        Assertions.assertEquals(foundUserStory,userStory);
    }

    /*
    *
    * Delete
    *
    * */

    @Test
    void deleteUserStorySuccessTest(){
        String userStoryId = "Id";
        UserStory userStory = new UserStory();
        userStory.setProjectId("pId");
        List<UserStory> list = new ArrayList<>();

        Mockito.when(userStoryRepo.findByUserStoryId(userStoryId)).thenReturn(userStory);
        Mockito.when(userStoryRepo.findByProjectId("pId")).thenReturn(list);

        List<UserStory> foundList = userStoryService.deleteUserStory(userStoryId);

        Assertions.assertEquals(foundList,list);
    }

    @Test
    void deleteUserStoryFailureTest(){
        String userStoryId = "Id";

        Mockito.when(userStoryRepo.findByUserStoryId(userStoryId)).thenReturn(null);

        List<UserStory> foundList = userStoryService.deleteUserStory(userStoryId);

        Assertions.assertNull(foundList);
    }
}
