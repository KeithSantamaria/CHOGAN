package com.example.projectservice.services;

import com.projectservice.models.Project;
import com.projectservice.repository.ProjectRepo;
import com.projectservice.services.ProjectService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class ProjectServiceTest {

    private ProjectRepo projectRepo = Mockito.mock(ProjectRepo.class);

    private ProjectService projectService = new ProjectService(projectRepo);

    @Test
    public void insertTest(){
        Project project = new Project();

        projectService.insert(project);
    }

}