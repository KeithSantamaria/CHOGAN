package com.projectservice.controller;

import com.projectservice.services.ITagService;
import com.projectservice.services.TagService;
import org.mockito.Mockito;

public class TagControllerTest {

    private final ITagService tagService = Mockito.mock(TagService.class);

    private final TagController tagController = new TagController(tagService);


}
