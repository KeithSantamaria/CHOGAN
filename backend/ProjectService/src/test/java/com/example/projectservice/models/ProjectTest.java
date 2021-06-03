package com.example.projectservice.models;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

class ProjectTest {

    private Project project;

    @BeforeEach
    void setUp() {
        project = new Project();
    }


    @Test
    void getProjectId() {
        project.setProjectId("Id");
        String id = project.getProjectId();
        Assertions.assertEquals(id,"Id");
    }

    @Test
    void getUserId() {
        project.setUserId("Id");
        String id = project.getUserId();
        Assertions.assertEquals(id,"Id");
    }

    @Test
    void getProjectName() {
        project.setProjectName("Name");
        String name = project.getProjectName();
        Assertions.assertEquals(name,"Name");
    }

    @Test
    void getModels() {
        List<Model> list = new ArrayList<>();
        project.setModels(list);
        List<Model> foundList = project.getModels();
        Assertions.assertEquals(foundList,list);
    }

    @Test
    void getEndpoints() {
        List<Endpoint> list = new ArrayList<>();
        project.setEndpoints(list);
        List<Endpoint> foundList = project.getEndpoints();
        Assertions.assertEquals(foundList,list);
    }

    @Test
    void getTags() {
        List<Tag> list = new ArrayList<>();
        project.setTags(list);
        List<Tag> foundList = project.getTags();
        Assertions.assertEquals(foundList,list);
    }

    @Test
    void getUserStories() {
        List<UserStory> list = new ArrayList<>();
        project.setUserStories(list);
        List<UserStory> foundList = project.getUserStories();
        Assertions.assertEquals(foundList,list);
    }
}