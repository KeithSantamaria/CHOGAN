package com.example.projectservice.controller;

import com.example.projectservice.models.Project;
import com.example.projectservice.services.IProjectService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProjectController {

    private final IProjectService projectService;

    /*
    *
    * Create
    *
    * */
    @PutMapping("CreateNewProject")
    public ResponseEntity<Project> createNewProject(@RequestBody Project project){
        // two possible solutions, either a successful creation or a failed creation
        try{
            projectService.insert(project);
            return new ResponseEntity<>(project,HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /*
    *
    * Read
    *
    * */

    /*
    *
    * Update
    *
    * */

    /*
    *
    * Delete
    *
    * */

}
