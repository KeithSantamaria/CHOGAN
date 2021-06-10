package com.projectservice.controller;

import com.projectservice.models.Model;
import com.projectservice.services.IModelService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@Slf4j
@RequestMapping("/api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ModelController {

    private final IModelService modelService;

    /*
    *
    * Create
    *
    * */

    /**
     * Creates and adds a model to the db
     * @param model The model to add
     * @return The created model
     */
    @PostMapping("/create/project/model")
    public ResponseEntity<List<Model>> createNewModel(@RequestBody Model model){
        try{
            Model savedModel = modelService.insert(model);
            log.info("Successfully added new model to the DB.");
            return new ResponseEntity<>(modelService.findByProjectId(model.getProjectId()),HttpStatus.CREATED);
        }catch (Exception e){
            log.error("Failed to add model to the DB.");
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /*
    *
    * Read
    *
    * */

    /**
     * Gets a single model from its id
     * @param modelId The id of the model to find
     * @return The response entity containing the model
     */
    @GetMapping("/read/project/model")
    public ResponseEntity<Model> readModel(@RequestParam String modelId){
        Model foundModel = modelService.findByModelId(modelId);
        if (foundModel == null){
            log.error("No such model exists of modelId : {}",modelId);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        log.info("Successfully found model of modelId : {}",modelId);
        return new ResponseEntity<>(foundModel,HttpStatus.OK);
    }

    /**
     * Finds a list of all models with a shared projectId
      * @param projectId The projectId to find models by
     * @return A response entity containing the models if successful
     */
    @GetMapping("/read/project/models")
    public ResponseEntity<List<Model>> readModels(@RequestParam String projectId){
        List<Model> list = modelService.findByProjectId(projectId);
        log.info("Successfully found models associated with projectId : {}",projectId);
        return new ResponseEntity<>(list,HttpStatus.OK);
    }

    /*
    *
    * Update
    *
    * */

    /**
     * Takes a model to update that has been updated
     * @param model The updated model and model to update
     * @return The response entity containing the result
     */
    @PutMapping("/update/project/model")
    public ResponseEntity<List<Model>> updateModel(@RequestBody Model model){
        Model updatedModel = modelService.updateModel(model);
        if (updatedModel == null){
            log.error("Failed to update model of modelId : {}",model.getModelId());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        log.info("Successfullly updated model of modelId : {}",model.getModelId());
        return new ResponseEntity<>(modelService.findByProjectId(updatedModel.getProjectId()),HttpStatus.OK);
    }

    /*
    *
    * Delete
    *
    * */

    /**
     * Deletes a model from the db
     * @param modelId The model to delete
     * @return The list of the remaining models
     */
    @DeleteMapping("/delete/project/model")
    public ResponseEntity<List<Model>> deleteModel(@RequestParam String modelId){
        List<Model> updatedModels = modelService.deleteModel(modelId);
        if (updatedModels == null){
            log.error("No such model exists of modelId : {}",modelId);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        log.info("Successfully delete model of modelId : {}",modelId);
        return new ResponseEntity<>(updatedModels,HttpStatus.OK);
    }

}
