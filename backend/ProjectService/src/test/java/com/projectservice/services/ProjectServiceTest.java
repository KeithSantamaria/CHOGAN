package com.projectservice.services;

import com.projectservice.models.Project;
import com.projectservice.repository.ProjectRepo;
import com.projectservice.services.ProjectService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.SpringBootConfiguration;

@SpringBootConfiguration
class ProjectServiceTest {

    private ProjectRepo projectRepo = Mockito.mock(ProjectRepo.class);

    private ProjectService projectService = new ProjectService(projectRepo);

    /*
    *
    * Create
    *
    * */

    @Test
    public void insertTest(){
        Project project = new Project();

        projectService.insert(project);
    }

    /*
    *
    * Read
    *
    * */
    @Test
    public void findByProjectId(){
        Project project = new Project();
        String projectId = "id";

        Mockito.when(projectRepo.findByProjectId(projectId)).thenReturn(project);

        Project foundProject = projectService.findByProjectId(projectId);

        Assertions.assertEquals(foundProject,project);
    }

    /*
    *
    * Update
    *
    * */

    @Test
    public void updateProjectTest(){
        Project project = new Project();

        Mockito.when(projectRepo.save(project)).thenReturn(project);

        Project updatedProject = projectService.update(project);

        Assertions.assertEquals(updatedProject,project);
    }


    /*
    *
    * Delete
    *
    * */

    @Test
    public void deleteProjectTest(){
        String projectId = "Id";

        projectService.delete(projectId);
    }

}