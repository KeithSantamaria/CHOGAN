package com.projectservice.services;

import com.projectservice.models.UserStory;
import com.projectservice.repository.UserStoryRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Class for handling all service layer methods for user stories
 */
@Service
@AllArgsConstructor
public class UserStoryService implements IUserStoryService{

    private final UserStoryRepo userStoryRepo;

    /*
    *
    * Create
    *
    * */

    @Override
    public void insert(UserStory userStory) {
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
