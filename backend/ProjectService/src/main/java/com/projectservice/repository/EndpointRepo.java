package com.projectservice.repository;

import com.projectservice.models.Endpoint;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EndpointRepo extends MongoRepository<Endpoint, String> {
    List<Endpoint> findByProjectId(String projectId);
    Endpoint findByEndPointId(String endpointId);
}
