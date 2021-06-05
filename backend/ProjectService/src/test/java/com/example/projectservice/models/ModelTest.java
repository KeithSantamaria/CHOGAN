package com.example.projectservice.models;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.HashMap;
import java.util.Map;


class ModelTest {

    private Model model;

    @BeforeEach
    void setUp() {
        model = new Model();
    }

    @Test
    void getModelId() {
        model.setModelId("Id");
        String id = model.getModelId();
        Assertions.assertEquals(id,"Id");
    }

    @Test
    void getModelName() {
        model.setModelName("Name");
        String name = model.getModelName();
        Assertions.assertEquals(name,"Name");
    }

    @Test
    void getModelMetadata() {
        Map<String,String> map = new HashMap<>();
        model.setModelMetadata(map);
        Map foundMap = model.getModelMetadata();
        Assertions.assertEquals(foundMap,map);
    }
}