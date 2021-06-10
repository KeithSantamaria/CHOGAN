package com.projectservice.services;

import com.projectservice.models.Model;

import java.util.List;

/**
 * Functional interface for models
 */
public interface IModelService {
    Model insert(Model model);

    Model findByModelId(String modelId);
    List<Model> findByProjectId(String projectId);
}
