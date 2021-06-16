package com.example.projectservice.controller;

import com.projectservice.controller.ProjectController;
import com.projectservice.models.Project;
import com.projectservice.services.IProjectService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@SpringBootConfiguration
class ProjectControllerTest {

    private final IProjectService projectService = Mockito.mock(IProjectService.class);

    private final ProjectController projectController = new ProjectController(projectService);

    /*
    *
    * Create
    *
    * */
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

    /*
    *
    * Read
    *
    * */

    @Test
    public void readProjectSuccessTest(){
        Project project = new Project();
        String projectId = "Id";
        project.setProjectId(projectId);

        Mockito.when(projectService.findByProjectId(projectId)).thenReturn(project);

        ResponseEntity<Project> response = projectController.readProject(projectId);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.OK);
    }

    @Test
    public void readProjectFailureTest(){
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
    public void updateProjectTest(){
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
    public void deleteProjectTest(){
        String projectId = "Id";

        ResponseEntity<Project> response = projectController.deleteProject(projectId);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.OK);
    }
}