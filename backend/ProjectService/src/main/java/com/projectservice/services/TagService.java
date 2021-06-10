package com.projectservice.services;

import com.projectservice.models.Tag;
import com.projectservice.repository.TagRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Class for handling all service layer methods for tags
 */
@Service
@AllArgsConstructor
public class TagService implements ITagService{

    private final TagRepo tagRepo;

    /*
    *
    * Create
    *
    * */

    /**
     * Inserts a tag into the tag collection
     * @param tag The tag to insert
     */
    @Override
    public void insert(Tag tag) {
        tagRepo.insert(tag);
    }

    /*
    *
    * Read
    *
    * */

    /**
     * Finds one tag by a given tag Id
     * @param tagId The id to find
     * @return The found tag
     */
    @Override
    public Tag findByTagId(String tagId) {
        return tagRepo.findByTagId(tagId);
    }

    /**
     * Finds all tags with a given projectId
     * @param projectId The projectId to find by
     * @return A list of all tags
     */
    @Override
    public List<Tag> findAllByProjectId(String projectId) {
        return tagRepo.findByProjectId(projectId);
    }

    /*
    *
    * Update
    *
    * */

    /**
     * The tag to update
     * @param tag The updated tag
     * @return The updated updated tag
     */
    @Override
    public Tag update(Tag tag) {
        return tagRepo.save(tag);
    }

    /*
    *
    * Delete
    *
    * */

    /**
     * Deletes a tag from the tag collection
     * @param tagId The tag to delete
     */
    @Override
    public void delete(String tagId) {
        tagRepo.deleteById(tagId);
    }
}
