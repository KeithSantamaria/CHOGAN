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
     * @param endpoint
     * @return
     */
    @PostMapping("/create/project/endpoint")
    public ResponseEntity<Endpoint> createNewEndpoint(@RequestBody Endpoint endpoint){
        try{
            endpointService.insert(endpoint);
        } catch (Exception e){
            log.error("Failed to create new endpoint object in MongoDB");
        }
        return new ResponseEntity<>(endpoint, HttpStatus.OK);
    }

    /*
    *
    * Read
    *
    * */

    /**
     * Retrieves all endpoints associated with a given projectId
     * @param projectId
     * @return
     */
    @GetMapping("/read/project/endpoints")
    public ResponseEntity<Object> readEndpoints(@RequestParam String projectId){
        List<Endpoint> endpointList = endpointService.findAllByProjectId(projectId);

        List<JSONObject> endpoints = new ArrayList<JSONObject>();
        for(Endpoint e : endpointList){
            JSONObject entity = new JSONObject();
            entity.put("endpointId", e.getEndpointId());
            entity.put("projectId", e.getProjectId());
            entity.put("endpointName", e.getEndpointName());
            entity.put("endpointUrlPattern", e.getEndpointUrlPattern());
            entity.put("endpointDescription", e.getEndpointDescription());
        }
        if(endpoints == null){
            log.error("No endpoints associated with projectId: {}", projectId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        log.info("Retrieved endpoints associated with projectId: {}", projectId);
        return new ResponseEntity<Object>(endpoints, HttpStatus.OK);
    }

    /*
    *
    * Update
    *
    * */

    /**
     *
     * @param endpointId
     * @return
     */
    @GetMapping("/read/project/endpoint")
    public ResponseEntity<Endpoint> readEndpoint(@RequestParam String endpointId){
        Endpoint endpoint = endpointService.findByEndpointId(endpointId);
        log.info("Retrieved endpoint with id: {}", endpointId);
        return new ResponseEntity<>(endpoint, HttpStatus.OK);
    }

    /*
    *
    * Delete
    *
    * */

    /**
     *
     * @param endpoint
     * @return
     */
    @PutMapping("/update/project/endpoint")
    public ResponseEntity<Endpoint> updateEndpoint(@RequestBody Endpoint endpoint){
        Endpoint updatedEndpoint = endpointService.update(endpoint);
        return new ResponseEntity<>(updatedEndpoint, HttpStatus.OK);
    }

    /**
     *
     * @param endpointId
     * @return
     */
    @DeleteMapping("/delete/project/endpoint")
    public ResponseEntity<Endpoint> deleteEndpoint(@RequestParam String endpointId){
        endpointService.delete(endpointId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
