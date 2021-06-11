package com.projectservice.repository;

import com.projectservice.models.Wireframe;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Interface for handling wireframe repo
 */
@Repository
public interface WireframeRepo extends MongoRepository<Wireframe,String> {
    List<Wireframe> findByProjectId(String projectId);
    Wireframe findByWireframeId(String wireframeId);
}
