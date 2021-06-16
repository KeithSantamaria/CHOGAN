package com.projectservice.controller;

import com.projectservice.models.Wireframe;
import com.projectservice.services.IWireframeService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

//import javax.xml.ws.Response;
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
     *
     * @param wireframe The wireframe to add
     * @return The response entity
     */
    @PostMapping("/create/project/wireframe")
    public ResponseEntity<List<Wireframe>> createNewWireframe(@RequestBody Wireframe wireframe) {
        try {
            wireframeService.insert(wireframe);
        } catch (Exception e) {
            log.error("Unable to add wireframe to DB.");
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        log.info("Successfully added wireframe to DB.");
        return new ResponseEntity<>(wireframeService.findByProjectId(wireframe.getProjectId()), HttpStatus.CREATED);
    }

    /*
     *
     * Read
     *
     * */

    /**
     * Reads a wireframe based on wireframe Id
     *
     * @param wireframeId The wireframe Id
     * @return The response entity
     */
    @GetMapping("/read/project/wireframe")
    public ResponseEntity<Wireframe> readWireframe(@RequestParam String wireframeId) {
        Wireframe foundWireframe = wireframeService.findByWireframeId(wireframeId);
        if (foundWireframe == null) {
            log.error("Unable to find wireframe with wireframeId : {}", wireframeId);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        log.info("Successfully found wireframe with wireframeId : {}", wireframeId);
        return new ResponseEntity<>(foundWireframe, HttpStatus.OK);
    }

    /**
     * Finds a collection of wireframes from a projectId
     *
     * @param projectId The projectId to find
     * @return The list of wireframes in a response entity
     */
    @GetMapping("/read/project/wireframes")
    public ResponseEntity<List<Wireframe>> readWireframes(@RequestParam String projectId) {
        List<Wireframe> foundList = wireframeService.findByProjectId(projectId);
        log.info("Successfully found wireframes associated with projectId : {}", projectId);
        return new ResponseEntity<>(foundList, HttpStatus.OK);
    }

    /*
     *
     * Update
     *
     * */

    /**
     * Updates a wireframe in the db
     *
     * @param wireframe The updated wireframe
     * @return The response entity
     */
    @PutMapping("/update/project/wireframe")
    public ResponseEntity<List<Wireframe>> updateWireframe(@RequestBody Wireframe wireframe) {
        Wireframe foundWireframe = wireframeService.updateWireframe(wireframe);
        if (foundWireframe == null) {
            log.error("Failed to updated wireframe of wireframeId : {}", wireframe.getWireframeId());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        log.info("Successfully updated wireframe of wireframeId : {}", wireframe.getWireframeId());
        return new ResponseEntity<>(wireframeService.findByProjectId(wireframe.getProjectId()), HttpStatus.OK);
    }

    /*
     *
     * Delete
     *
     * */

    /**
     * Deletes a wireframe from the Db
     *
     * @param wireframeId the wireframe to delete
     * @return The response entity
     */
    @DeleteMapping("/delete/project/wireframe")
    public ResponseEntity<List<Wireframe>> deleteWireframe(@RequestParam String wireframeId) {
        List<Wireframe> foundWireframes = wireframeService.deleteWireframe(wireframeId);
        if (foundWireframes == null) {
            log.error("Failed to delete wireframe of wireframeId : {}", wireframeId);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        log.info("Successfully deleted wireframe of wireframeId : {}", wireframeId);
        return new ResponseEntity<>(foundWireframes, HttpStatus.OK);
    }
}