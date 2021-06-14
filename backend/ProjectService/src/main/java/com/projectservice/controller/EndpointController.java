package com.projectservice.controller;


import com.projectservice.models.Endpoint;
import com.projectservice.services.IEndpointService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

@RestController
@AllArgsConstructor
@Slf4j
@RequestMapping("/api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class EndpointController {
    private final IEndpointService endpointService;

    /*
    *
    * Create
    *
    * */

    /**
     * Creates an endpoint in the endpoints collection in MongoDB
     * @param endpoint The endpoint to add
     * @return A response entity containing the endpoint if successfull
     */
    @PostMapping("/create/project/endpoint")
    public ResponseEntity<List<Endpoint>> createNewEndpoint(@RequestBody Endpoint endpoint){
        try{
            endpointService.insert(endpoint);
        } catch (Exception e){
            log.error("Failed to create new endpoint object in MongoDB.");
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        log.info("Successfully added new endpoint object in MongoDB.");
        return new ResponseEntity<>(endpointService.findAllByProjectId(endpoint.getProjectId()), HttpStatus.CREATED);
    }

    /*
    *
    * Read
    *
    * */

    /**
     * Gets a single endpoint based on endpointId
     * @param endpointId The endpointId to find
     * @return The endpoint with the id response entity
     */
    @GetMapping("/read/project/endpoint")
    public ResponseEntity<Endpoint> readEndpoint(@RequestParam String endpointId){
        Endpoint endpoint = endpointService.findByEndpointId(endpointId);
        if (endpoint == null){
            log.error("No such endpoint found of endpointId : {}",endpointId);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        log.info("Retrieved endpoint with id: {}", endpointId);
        return new ResponseEntity<>(endpoint, HttpStatus.OK);
    }

    /**
     * Retrieves all endpoints associated with a given projectId
     * @param projectId The projectId to find
     * @return A list of projects with an error code
     */
    @GetMapping("/read/project/endpoints")
    public ResponseEntity<List<Endpoint>> readEndpoints(@RequestParam String projectId){
        List<Endpoint> endpointList = endpointService.findAllByProjectId(projectId);
        log.info("Successfully retrieved all endpoints for projectId : {}",projectId);
        return new ResponseEntity<>(endpointList,HttpStatus.OK);
    }


    /*
    *
    * Update
    *
    * */

    /**
     * Updates an endpoint in the db
     * @param endpoint The endpoint to update
     * @return The updated endpoint in a response entity
     */
    @PutMapping("/update/project/endpoint")
    public ResponseEntity<List<Endpoint>> updateEndpoint(@RequestBody Endpoint endpoint){
        Endpoint updatedEndpoint = endpointService.update(endpoint);
        if (updatedEndpoint == null){
            log.error("No such endpoint found of endpointId : {}",endpoint.getEndpointId());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        log.info("Successfully updated endpoint of endpointId : {}",endpoint.getEndpointId());
        return new ResponseEntity<>(endpointService.findAllByProjectId(updatedEndpoint.getProjectId()), HttpStatus.OK);
    }

    /*
    *
    * Delete
    *
    * */

    /**
     * Deletes an endpoint from the backend
     * @param endpointId The endpoint to delete
     * @return A list of all endpoints, notably missing the endpoints
     */
    @DeleteMapping("/delete/project/endpoint")
    public ResponseEntity<List<Endpoint>> deleteEndpoint(@RequestParam String endpointId){
        List<Endpoint> updatedEndpoints = endpointService.delete(endpointId);
        if (updatedEndpoints == null){
            log.error("No such endpoint exists of endpointId : {}.",endpointId);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        log.info("Successfully deleted endpoint of endpointId : {}.",endpointId);
        return new ResponseEntity<>(updatedEndpoints,HttpStatus.OK);
    }
}
