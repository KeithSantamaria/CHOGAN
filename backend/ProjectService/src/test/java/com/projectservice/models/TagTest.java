package com.projectservice.models;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;


class TagTest {

    private Tag tag;

    @BeforeEach
    void setUp() {
        tag = new Tag();
    }


    @Test
    void tagIdTest() {
        tag.setTagId("Id");
        String id = tag.getTagId();
        Assertions.assertEquals(id,"Id");
    }

    @Test
    void tagNameTest(){
        tag.setTagName("Name");
        String name = tag.getTagName();
        Assertions.assertEquals(name,"Name");
    }

    @Test
    void projectIdTest() {
        tag.setProjectId("Id");
        String id = tag.getProjectId();
        Assertions.assertEquals(id,"Id");
    }

    @Test
    void tagDescriptionTest(){
        tag.setTagDescription("Desc");
        String desc = tag.getTagDescription();
        Assertions.assertEquals(desc,"Desc");
    }
}