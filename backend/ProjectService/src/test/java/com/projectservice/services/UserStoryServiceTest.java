package com.projectservice.services;

import com.projectservice.models.UserStory;
import com.projectservice.repository.UserStoryRepo;
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
