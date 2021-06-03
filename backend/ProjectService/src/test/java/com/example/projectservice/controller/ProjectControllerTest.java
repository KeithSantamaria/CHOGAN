package com.example.projectservice.controller;

import com.example.projectservice.models.Project;
import com.example.projectservice.services.IProjectService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@SpringBootTest
class ProjectControllerTest {

    private final IProjectService projectService = Mockito.mock(IProjectService.class);

    private final ProjectController projectController = new ProjectController(projectService);

    @Test
    public void createNewProjectSuccess(){
        Project project = new Project();

        ResponseEntity<Project> response = projectController.createNewProject(project);

        Assertions.assertEquals(response.getStatusCode(), HttpStatus.CREATED);
    }

    @Test
    public void createNewProjectFailure(){
        Project project = new Project();

        Mockito.doThrow(new Exception());

        ResponseEntity<Project> response = projectController.createNewProject(project);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.INTERNAL_SERVER_ERROR);
    }
}