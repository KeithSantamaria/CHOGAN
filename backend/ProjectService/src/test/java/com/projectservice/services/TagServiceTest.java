package com.projectservice.services;

import com.projectservice.models.Tag;
import com.projectservice.repository.TagRepo;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.ArrayList;
import java.util.List;

public class TagServiceTest {

    private final TagRepo tagRepo = Mockito.mock(TagRepo.class);

    private final TagService tagService = new TagService(tagRepo);

    /*
    *
    * Create
    *
    * */

    @Test
    void insertTest(){
        Tag tag = new Tag();

        tagService.insert(tag);
    }

    /*
    *
    * Read
    *
    * */

    @Test
    void findByTagIdTest(){
        String tagId = "Id";
        Tag tag = new Tag();

        Mockito.when(tagRepo.findByTagId(tagId)).thenReturn(tag);

        Tag foundTag = tagService.findByTagId(tagId);

        Assertions.assertEquals(foundTag,tag);

    }

    @Test
    void findByProjectIdTest(){
        String projectId = "Id";
        List<Tag> list = new ArrayList<>();

        Mockito.when(tagRepo.findByProjectId(projectId)).thenReturn(list);

        List<Tag> foundList = tagService.findAllByProjectId(projectId);

        Assertions.assertEquals(foundList,list);
    }
    /*
    *
    * Update
    *
    * */

    @Test
    void updateTest(){
        Tag tag = new Tag();

        Mockito.when(tagRepo.save(tag)).thenReturn(tag);

        Tag foundTag = tagService.update(tag);

        Assertions.assertEquals(foundTag,tag);
    }

    /*
    *
    * Delete
    *
    * */

    @Test
    void deleteSuccessTest(){
        String tagId = "Id";
        Tag tag = new Tag();
        tag.setProjectId("pId");
        List<Tag> list = new ArrayList<>();

        Mockito.when(tagRepo.findByTagId(tagId)).thenReturn(tag);
        Mockito.when(tagRepo.findByProjectId("pId")).thenReturn(list);

        List<Tag> foundList = tagService.delete(tagId);

        Assertions.assertEquals(foundList,list);
    }

    @Test
    void deleteFailureTest(){
        String tagId = "Id";

        Mockito.when(tagRepo.findByTagId(tagId)).thenReturn(null);

        List<Tag> foundList = tagService.delete(tagId);

        Assertions.assertNull(foundList);
    }
}
