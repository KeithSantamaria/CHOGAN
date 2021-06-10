package com.projectservice.repository;

import com.projectservice.models.Tag;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface TagRepo extends MongoRepository<Tag, String> {
    List<Tag> findByProjectId(String projectId);
    Tag findByTagId(String tagId);
}
