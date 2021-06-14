package com.projectservice.repository;

import com.projectservice.models.Endpoint;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Interface for handling the endpoint repo
 */
@Repository
public interface EndpointRepo extends MongoRepository<Endpoint, String> {
    List<Endpoint> findByProjectId(String projectId);
    Endpoint findByEndpointId(String endpointId);
}
