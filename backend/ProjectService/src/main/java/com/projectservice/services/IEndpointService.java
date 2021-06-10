package com.projectservice.services;

import com.projectservice.models.Endpoint;

import java.util.List;

/**
 * Interface for handling all endpoint services
 */
public interface IEndpointService {
    void insert(Endpoint endpoint);

    Endpoint findByEndpointId(String endpointId);
    List<Endpoint> findAllByProjectId(String projectId);

    Endpoint update(Endpoint endpoint);

    void delete(String endpointId);
}
