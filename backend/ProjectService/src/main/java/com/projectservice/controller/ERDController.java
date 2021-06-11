package com.projectservice.controller;

import com.projectservice.models.ERD;
import com.projectservice.services.IErdService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controller for handling all ERD requests
 */
@RestController
@AllArgsConstructor
@Slf4j
@RequestMapping("/api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ERDController {

    private final IErdService erdService;

    /*
    *
    * Create
    *
    * */

    /**
     * Creates a new ERD for the DB
     * @param erd The new ERD
     * @return The response entity
     */
    @PostMapping("/create/project/ERD")
    public ResponseEntity<List<ERD>> createNewErd(@RequestBody ERD erd){
        return null;
    }

    /*
    *
    * Read
    *
    * */

    /**
     * Finds an ERD with the associated ID
     * @param erdId The id to find by
     * @return the response entity
     */
    @GetMapping("/read/project/ERD")
    public ResponseEntity<ERD> readERD(@RequestParam String erdId){
        return null;
    }

    /**
     * Finds a list of all erds with the projectId
     * @param projectId The id to find by
     * @return The response entity
     */
    @GetMapping("/read/project/ERDs")
    public ResponseEntity<List<ERD>> readERDs(@RequestParam String projectId){
        return null;
    }

    /*
    *
    * Update
    *
    * */

    /**
     * Updates an ERD in the DB
     * @param erd The updated ERD
     * @return The response entity
     */
    @PutMapping("/update/project/ERD")
    public ResponseEntity<List<ERD>> updateERD(@RequestBody ERD erd){
        return null;
    }

    /*
    *
    * Delete
    *
    * */

    @DeleteMapping("/delete/project/ERD")
    public ResponseEntity<List<ERD>> deleteERD(@RequestParam String projectId){
        return null;
    }
}
