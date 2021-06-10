package com.projectservice.services;

import com.projectservice.models.Endpoint;

import java.util.List;

public interface IEndpointService {
    void insert(Endpoint endpoint);
    void delete(String endpointId);
    Endpoint update(Endpoint endpoint);
    List<Endpoint> findAllByProjectId(String projectId);
    Endpoint findByEndpointId(String endpointId);
}
