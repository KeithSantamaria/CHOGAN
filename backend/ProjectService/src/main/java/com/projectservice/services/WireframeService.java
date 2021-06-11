package com.projectservice.services;

import com.projectservice.models.Wireframe;
import com.projectservice.repository.WireframeRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Class for handling all service layer methods for wireframes
 */
@Service
@AllArgsConstructor
public class WireframeService implements IWireframeService{

    private final WireframeRepo wireframeRepo;

    /*
    *
    * Create
    *
    * */

    /**
     * Creates a wireframe in the db
     * @param wireframe The wireframe to add
     */
    @Override
    public void insert(Wireframe wireframe) {
        wireframeRepo.save(wireframe);
    }

    /*
    *
    * Read
    *
    * */

    /**
     * Finds a wireframe by wireframeId
     * @param wireframeId The wireframe Id to find
     * @return The wireframeId
     */
    @Override
    public Wireframe findByWireframeId(String wireframeId) {
        return wireframeRepo.findByWireframeId(wireframeId);
    }

    /**
     * Finds a list of wireframes based off of projectId
     * @param projectId The projectId to find
     * @return The list of projectIds
     */
    @Override
    public List<Wireframe> findByProjectId(String projectId) {
        return wireframeRepo.findByProjectId(projectId);
    }

    /*
    *
    * Update
    *
    * */

    /**
     * Updates a wireframe
     * @param wireframe The updated wireframe
     * @return The updated wireframe
     */
    @Override
    public Wireframe updateWireframe(Wireframe wireframe) {
        return wireframeRepo.save(wireframe);
    }

    /*
    *
    * Delete
    *
    * */

    /**
     * Deletes a wireframe from the db
     * @param wireframeId The wireframe to delete
     * @return The remaining wireframes
     */
    @Override
    public List<Wireframe> deleteWireframe(String wireframeId) {
        Wireframe foundWireframe = wireframeRepo.findByWireframeId(wireframeId);
        if (foundWireframe == null){
            return null;
        }
        String projectId = foundWireframe.getProjectId();
        wireframeRepo.deleteById(wireframeId);
        return wireframeRepo.findByProjectId(projectId);
    }
}
