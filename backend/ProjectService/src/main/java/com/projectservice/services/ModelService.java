package com.projectservice.services;

import com.projectservice.models.Model;
import com.projectservice.repository.ModelRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Class for handling all service layer methods for models
 */
@Service
@AllArgsConstructor
public class ModelService implements IModelService{
    private final ModelRepo modelRepo;

    /*
    *
    * Create
    *
    * */

    /**
     * Adds a model to the db
     * @param model The model to add
     * @return The saved model
     */
    @Override
    public Model insert(Model model){
        return modelRepo.save(model);
    }

    /*
    *
    * Read
    *
    * */

    /**
     * Finds the model from an Id
     * @param modelId The id of the model to find
     * @return The model if found, null otherwise
     */
    @Override
    public Model findByModelId(String modelId){
        return modelRepo.findByModelId(modelId);
    }

    /**
     * Finds a list of models based on projectId
     * @param projectId The projectId to find by
     * @return The list of models, empty if none
     */
    public List<Model> findByProjectId(String projectId){
        return modelRepo.findByProjectId(projectId);
    }

    /*
    *
    * Update
    *
    * */

    /**
     * Updates a model in the db with a new one
     * @param model The updated model
     * @return The updated model
     */
    @Override
    public Model updateModel(Model model){
        return modelRepo.save(model);
    }

    /*
    *
    * Delete
    *
    * */

    @Override
    public List<Model> deleteModel(String modelId){
        Model foundModel = modelRepo.findByModelId(modelId);
        if (foundModel == null){
            return null;
        }
        String projectId = foundModel.getProjectId();
        modelRepo.deleteById(modelId);
        return modelRepo.findByProjectId(projectId);
    }
}
