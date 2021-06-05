package com.example.projectservice.models;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

class TagTest {

    private Tag tag;

    @BeforeEach
    void setUp() {
        tag = new Tag();
    }


    @Test
    void getTagId() {
        tag.setTagId("Id");
        String id = tag.getTagId();
        Assertions.assertEquals(id,"Id");
    }

    @Test
    void getTechs() {
        Map<String, List<String>> map = new HashMap<>();
        tag.setTechs(map);
        Map<String, List<String>> foundMap = tag.getTechs();
        Assertions.assertEquals(foundMap,map);
    }
}