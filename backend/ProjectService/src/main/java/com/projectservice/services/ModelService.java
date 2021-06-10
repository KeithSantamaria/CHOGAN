package com.projectservice.services;

import com.projectservice.models.Model;
import com.projectservice.repository.ModelRepo;
import lombok.AllArgsConstructor;
import org.springframework.data.mongodb.core.aggregation.ArithmeticOperators;
import org.springframework.stereotype.Service;

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

    @Override
    public Model insert(Model model){
        return model;
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
