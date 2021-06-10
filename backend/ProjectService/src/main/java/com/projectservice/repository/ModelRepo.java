package com.projectservice.repository;

import com.projectservice.models.Model;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ModelRepo extends MongoRepository<Model, String> {
    List<Model> findByProjectId(String projectId);
    Model findByModelId(String modelId);
}
