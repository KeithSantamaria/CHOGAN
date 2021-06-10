package com.projectservice.controller;

import com.projectservice.services.IUserStoryService;
import com.projectservice.services.UserStoryService;
import org.mockito.Mockito;

public class UserStoryControllerTest {

    private final IUserStoryService userStoryService = Mockito.mock(UserStoryService.class);

    private final UserStoryController userStoryController = new UserStoryController(userStoryService);

    /*
    *
    * Create
    *
    * */

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
