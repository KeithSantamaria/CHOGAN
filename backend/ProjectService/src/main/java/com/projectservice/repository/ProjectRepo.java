package com.projectservice.repository;

import com.projectservice.models.Project;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

/**
 * Repository for projects. Connects to mongodb
 */
@Repository
public interface ProjectRepo extends MongoRepository<Project, String> {
    List<Project> findAllByUserId(String userId);
    Project findByProjectId(String projectId);
}
