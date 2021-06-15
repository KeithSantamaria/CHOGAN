package com.example.projectservice.models;

import com.projectservice.models.UserStory;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class UserStoryTest {

    private UserStory userStory;

    @BeforeEach
    void setUp() {
        userStory = new UserStory();
    }

    @Test
    void getUserStoryId() {
        userStory.setUserStoryId("Id");
        String id = userStory.getUserStoryId();
        Assertions.assertEquals(id,"Id");
    }

    @Test
    void getUserStoryDescription() {
        userStory.setUserStoryDescription("Desc");
        String desc = userStory.getUserStoryDescription();
        Assertions.assertEquals(desc,"Desc");
    }
}