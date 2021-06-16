package com.projectservice.repository;

import com.projectservice.models.Model;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Interface for handling the model repo
 */
@Repository
public interface ModelRepo extends MongoRepository<Model, String> {
    List<Model> findByProjectId(String projectId);
    Model findByModelId(String modelId);
}
