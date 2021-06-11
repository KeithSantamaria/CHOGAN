package com.projectservice.controller;

import com.projectservice.models.Wireframe;
import com.projectservice.services.IWireframeService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.Response;
import java.util.List;

/**
 * Controller for wireframe related requests
 */
@RestController
@AllArgsConstructor
@Slf4j
@RequestMapping("/api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class WireframeController {

    private final IWireframeService wireframeService;

    /*
    *
    * Create
    *
    * */

    /**
     * Inserts a wireframe into the db
     * @param wireframe The wireframe to add
     * @return The response entity
     */
    @PostMapping("/create/project/wireframe")
    public ResponseEntity<List<Wireframe>> createNewWireframe(@RequestBody Wireframe wireframe){
        return null;
    }

    /*
    *
    * Read
    *
    * */

    /**
     * Reads a wireframe based on wireframe Id
     * @param wireframeId The wireframe Id
     * @return The response entity
     */
    @GetMapping("/read/project/wireframe")
    public ResponseEntity<Wireframe> readWireframe(@RequestParam String wireframeId){
        return null;
    }

    /**
     * Finds a collection of wireframes from a projectId
     * @param projectId The projectId to find
     * @return The list of wireframes in a response entity
     */
    @GetMapping("/read/project/wireframes")
    public ResponseEntity<List<Wireframe>> readWireframes(@RequestParam String projectId){
        return null;
    }

    /*
    *
    * Update
    *
    * */

    /**
     * Updates a wireframe in the db
     * @param wireframe The updated wireframe
     * @return The response entity
     */
    @PutMapping("/update/project/wireframe")
    public ResponseEntity<List<Wireframe>> updateWireframe(@RequestBody Wireframe wireframe){
        return null;
    }

    /*
    *
    * Delete
    *
    * */

    /**
     * Deletes a wireframe from the Db
     * @param wireframeId the wireframe to delete
     * @return The response entity
     */
    @DeleteMapping("/delete/project/wireframe")
    public ResponseEntity<List<Wireframe>> deleteWireframe(@RequestParam String wireframeId){
        return null;
    }
}
