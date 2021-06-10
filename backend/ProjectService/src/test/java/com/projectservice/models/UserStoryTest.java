package com.projectservice.models;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;


class UserStoryTest {

    private UserStory userStory;

    @BeforeEach
    void setUp() {
        userStory = new UserStory();
    }

    @Test
    void userStoryIdTest(){
        userStory.setUserStoryId("Id");
        String id = userStory.getUserStoryId();
        Assertions.assertEquals(id,"Id");
    }

    @Test
    void projectIdTest(){
        userStory.setProjectId("Id");
        String id = userStory.getProjectId();
        Assertions.assertEquals(id,"Id");
    }

    @Test
    void userStoryDescriptionTest(){
        userStory.setUserStoryDescription("Desc");
        String desc = userStory.getUserStoryDescription();
        Assertions.assertEquals(desc,"Desc");
    }
}