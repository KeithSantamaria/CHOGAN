package com.projectservice.services;

import com.projectservice.models.Wireframe;

import java.util.List;

/**
 * functional interface for wireframes
 */
public interface IWireframeService {

    void insert(Wireframe wireframe);

    Wireframe findByWireframeId(String wireframeId);
    List<Wireframe> findByProjectId(String projectId);

    Wireframe updateWireframe(Wireframe wireframe);

    List<Wireframe> deleteWireframe(String wireframeId);

}
