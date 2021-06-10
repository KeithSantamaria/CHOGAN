package com.projectservice.repository;

import com.projectservice.models.Wireframe;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 * Interface for handling wireframe repo
 */
@Repository
public interface WireframeRepo extends MongoRepository<Wireframe,String> {
}
