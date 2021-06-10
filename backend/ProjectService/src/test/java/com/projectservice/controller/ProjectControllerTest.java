package com.projectservice.controller;

import com.projectservice.controller.ProjectController;
import com.projectservice.models.Project;
import com.projectservice.services.IProjectService;
import com.projectservice.services.ProjectService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import javax.xml.ws.Response;

@SpringBootConfiguration
class ProjectControllerTest {

    private final IProjectService projectService = Mockito.mock(ProjectService.class);

    private final ProjectController projectController = new ProjectController(projectService);

    /*
    *
    * Create
    *
    * */

    @Test
    void createNewProjectSuccessTest(){
        Project project = new Project();

        ResponseEntity<Project> response = projectController.createNewProject(project);

        Assertions.assertEquals(response.getStatusCode(), HttpStatus.CREATED);
    }

    @Test
    void createNewProjectFailureTest(){
        Project project = new Project();

        Mockito.doThrow(new Exception());

        ResponseEntity<Project> response = projectController.createNewProject(project);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    /*
    *
    * Read
    *
    * */

    @Test
    void readProjectSuccessTest(){
        Project project = new Project();
        String projectId = "Id";
        project.setProjectId(projectId);

        Mockito.when(projectService.findByProjectId(projectId)).thenReturn(project);

        ResponseEntity<Project> response = projectController.readProject(projectId);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.OK);
    }

    @Test
    void readProjectFailureTest(){
        String projectId = "Id";

        Mockito.when(projectService.findByProjectId(projectId)).thenReturn(null);

        ResponseEntity<Project> response = projectController.readProject(projectId);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    /*
    *
    * Update
    *
    * */

    @Test
    void updateProjectTest(){
        Project project = new Project();

        Mockito.when(projectService.update(project)).thenReturn(project);

        ResponseEntity<Project> response = projectController.updateProject(project);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.OK);
    }

    /*
    *
    * Delete
    *
    * */

    @Test
    void deleteProjectTest(){
        String projectId = "Id";

        ResponseEntity<Project> response = projectController.deleteProject(projectId);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.OK);
    }
}