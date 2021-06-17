package com.projectservice.controller;

import com.projectservice.models.ERD;
import com.projectservice.services.IErdService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
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
        try{
            erdService.insert(erd);
        }catch (Exception e){
            log.error("Failed to add ERD to DB.");
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        log.info("Successfully added ERD to DB.");
        return new ResponseEntity<>(erdService.findByProjectId(erd.getProjectId()),HttpStatus.CREATED);
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
        ERD foundERD = erdService.findByErdId(erdId);
        if (foundERD == null){
            log.error("Failed to find ERD of erdId : {}",erdId);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        log.info("Successfully found ERD of erdId : {}",erdId);
        return new ResponseEntity<>(foundERD,HttpStatus.OK);
    }

    /**
     * Finds a list of all ERD with the projectId
     * @param projectId The id to find by
     * @return The response entity
     */
    @GetMapping("/read/project/ERDs")
    public ResponseEntity<List<ERD>> readERDs(@RequestParam String projectId){
        List<ERD> foundList = erdService.findByProjectId(projectId);
        log.info("Successfully found ERD of projectId : {}",projectId);
        return new ResponseEntity<>(foundList,HttpStatus.OK);
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
        ERD updatedERD = erdService.updateERD(erd);
        if (updatedERD == null){
            log.error("Failed to update ERD of erdId : {}",erd.getErdId());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        log.info("Successfully updated ERD of erdId : {}",erd.getErdId());
        return new ResponseEntity<>(erdService.findByProjectId(erd.getProjectId()),HttpStatus.OK);
    }

    /*
    *
    * Delete
    *
    * */

    @DeleteMapping("/delete/project/ERD")
    public ResponseEntity<List<ERD>> deleteERD(@RequestParam String erdId){
        List<ERD> foundERDs = erdService.deleteERD(erdId);
        if (foundERDs == null){
            log.error("Failed to delete ERD of erdId : {}",erdId);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        log.info("Successfully deleted ERD of erdID : {}",erdId);
        return new ResponseEntity<>(foundERDs,HttpStatus.OK);
    }
}
