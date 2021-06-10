package com.projectservice.controller;

import com.projectservice.models.Tag;
import com.projectservice.services.ITagService;
import com.projectservice.services.TagService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

public class TagControllerTest {

    private final ITagService tagService = Mockito.mock(TagService.class);

    private final TagController tagController = new TagController(tagService);

    /*
    *
    * Create
    *
    * */

    @Test
    void createNewTagSuccessTest(){
        Tag tag = new Tag();

        ResponseEntity<List<Tag>> response = tagController.createNewTag(tag);

        Assertions.assertEquals(response.getStatusCode(), HttpStatus.CREATED);
    }

    @Test
    void createNewTagFailureTest(){
        Tag tag = new Tag();

        Mockito.doThrow(new Exception());

        ResponseEntity<List<Tag>> response = tagController.createNewTag(tag);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.INTERNAL_SERVER_ERROR);
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
