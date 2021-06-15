package com.projectservice.models;

import com.projectservice.models.*;
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
    void getProjectStatus(){
        project.setProjectStatus("Status");
        String status = project.getProjectStatus();
        Assertions.assertEquals(status,"Status");
    }

    @Test
    void getProjectDescription(){
        project.setProjectDescription("Desc");
        String description = project.getProjectDescription();
        Assertions.assertEquals(description,"Desc");
    }
}