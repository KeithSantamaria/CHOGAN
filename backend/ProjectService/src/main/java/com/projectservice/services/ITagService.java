package com.projectservice.services;

import com.projectservice.models.Tag;

import java.util.List;

/**
 * Functional interface for tags
 */
public interface ITagService {
    void insert(Tag tag);

    Tag findByTagId(String tagId);
    List<Tag> findAllByProjectId(String projectId);

    Tag update(Tag tag);

    List<Tag> delete(String tagId);

}
