package com.projectservice.controller;

import com.projectservice.models.Project;
import com.projectservice.models.Widget;
import com.projectservice.services.IProjectService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


/**
 * Controller for handling all project related endpoints
 */
@RestController
@AllArgsConstructor
@Slf4j
@RequestMapping("/api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProjectController {

    private final IProjectService projectService;

    /*
     *
     * Create
     *
     * */

    /**
     * Creates a project in the database
     *
     * @param project The project to add
     * @return A response entity containing the success of the creation
     */
    @PostMapping("/create/project")
    public ResponseEntity<Project> createNewProject(@RequestBody Project project) {
        // two possible solutions, either a successful creation or a failed creation
        try {
            projectService.insert(project);
            log.info("Successfully created project with id: {}.", project.getProjectId());
            return new ResponseEntity<>(project, HttpStatus.CREATED);
        } catch (Exception e) {
            log.error("Failed to create new project.");
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /*
     *
     * Read
     *
     * */

    /**
     * Reads a project based off of a projects Id
     *
     * @param projectId The Id of the project to read
     * @return The status of the project
     */
    @GetMapping("/read/project")
    public ResponseEntity<Project> readProject(@RequestParam String projectId) {
        Project project = projectService.findByProjectId(projectId);
        if (project == null) {
            log.error("Cannot retrieve project with id: {}. Project does not exist.", projectId);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        log.info("Retrieved project with id: {}.", projectId);
        return new ResponseEntity<>(project, HttpStatus.OK);
    }
    /*
     *
     * Update
     *
     * */

    /**
     * Updates a project with the entered project
     *
     * @param project The updated project
     * @return The status of the response. Will always be OK
     */
    @PutMapping("/update/project")
    public ResponseEntity<Project> updateProject(@RequestBody Project project) {
        System.out.println("b4 = " + project.toString());
        Project updatedProject = projectService.update(project);
        System.out.println("after = " + updatedProject.toString());
        return new ResponseEntity<>(updatedProject, HttpStatus.OK);
    }


//    @PutMapping("/update/project/widget")
//    public ResponseEntity<Project> updateProjectWidgets(@RequestParam String projectId, @RequestBody Widget widget) {
//        Project updatedProject = projectService.addWidget(projectId, widget);
//        if (updatedProject == null) {
//            log.error("Cannot add widget to project with id: {}. Project does not exist.", projectId);
//            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//        log.info("Successfully added widget to project id: {}", projectId);
//        return new ResponseEntity<>(updatedProject, HttpStatus.OK);
//    }
    /*
     *
     * Delete
     *
     * */

    /**
     * Deletes a project with the given Id
     *
     * @param projectId The id of the project to delete
     * @return The status of the response, will always be OK
     */
    @DeleteMapping("/delete/project")
    public ResponseEntity<Project> deleteProject(@RequestParam String projectId) {
        projectService.delete(projectId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
