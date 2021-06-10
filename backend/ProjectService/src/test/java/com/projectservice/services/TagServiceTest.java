package com.projectservice.services;

import com.projectservice.models.Tag;
import com.projectservice.repository.TagRepo;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

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

        Assertions.assertEquals(foundTag,tagId);

    }

    /*
    *
    * Update
    *
    * */

    /*
    *
    * Delete
    *
    * */
}
