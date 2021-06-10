package com.projectservice.models;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;


class ProjectTest {

    private Project project;

    @BeforeEach
    void setUp() {
        project = new Project();
    }


    @Test
    void projectIdTest() {
        project.setProjectId("Id");
        String id = project.getProjectId();
        Assertions.assertEquals(id,"Id");
    }

    @Test
    void userIdTest() {
        project.setUserId("Id");
        String id = project.getUserId();
        Assertions.assertEquals(id,"Id");
    }

    @Test
    void projectNameTest() {
        project.setProjectName("Name");
        String name = project.getProjectName();
        Assertions.assertEquals(name,"Name");
    }

    @Test
    void projectStatusTest(){
        project.setProjectStatus("Status");
        String status = project.getProjectStatus();
        Assertions.assertEquals(status,"Status");
    }

    @Test
    void projectDescriptionTest(){
        project.setProjectDescription("Desc");
        String description = project.getProjectDescription();
        Assertions.assertEquals(description,"Desc");
    }
}