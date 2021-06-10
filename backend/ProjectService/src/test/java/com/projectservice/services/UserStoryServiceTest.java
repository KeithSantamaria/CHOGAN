package com.projectservice.services;

import com.projectservice.models.UserStory;
import com.projectservice.repository.UserStoryRepo;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;


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

        Mockito.when(userStoryRepo.findUserStoryById(userStoryId)).thenReturn(userStory);

        UserStory foundUserStory = userStoryService.findByUserStoryId(userStoryId);

        Assertions.assertEquals(foundUserStory,userStory);
    }

    /*
    *
    * Update
    *
    * */

    /*
    *
    * Delete
    *
    * */
}
