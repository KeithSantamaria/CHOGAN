package com.projectservice.repository;

import com.projectservice.models.Tag;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Interface for handling the tag repo
 */
@Repository
public interface TagRepo extends MongoRepository<Tag, String> {
    List<Tag> findByProjectId(String projectId);
    Tag findByTagId(String tagId);
}
