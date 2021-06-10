package com.projectservice.services;

import com.projectservice.models.Tag;

import java.util.List;

public interface ITagService {
    void insert(Tag tag);
    void delete(String tagId);
    Tag update(Tag tag);
    List<Tag> findAllByProjectId(String projectId);
    Tag findByTagId(String tagId);
}
