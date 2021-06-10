package com.projectservice.services;

import com.projectservice.models.Tag;
import com.projectservice.repository.TagRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class TagService implements ITagService{
    private final TagRepo tagRepo;

    @Override
    public void insert(Tag tag) {
        tagRepo.insert(tag);
    }

    @Override
    public void delete(String tagId) {
        tagRepo.deleteById(tagId);
    }

    @Override
    public Tag update(Tag tag) {
        return tagRepo.save(tag);
    }

    @Override
    public List<Tag> findAllByProjectId(String projectId) {
        return tagRepo.findByProjectId(projectId);
    }

    @Override
    public Tag findByTagId(String tagId) {
        return tagRepo.findByTagId(tagId);
    }
}
