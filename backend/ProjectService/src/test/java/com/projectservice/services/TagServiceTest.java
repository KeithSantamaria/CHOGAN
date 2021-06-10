package com.projectservice.services;

import com.projectservice.models.Tag;
import com.projectservice.repository.TagRepo;
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
