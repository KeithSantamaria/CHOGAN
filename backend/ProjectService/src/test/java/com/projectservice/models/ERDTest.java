package com.projectservice.models;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class ERDTest {

    private ERD erd;

    @BeforeEach
    void setUp(){
        erd = new ERD();
    }

    @Test
    void erdIDTest(){
        erd.setErdId("Id");
        String id = erd.getErdId();
        Assertions.assertEquals(id,"Id");
    }

    @Test
    void projectIdTest(){
        erd.setProjectId("Id");
        String id = erd.getProjectId();
        Assertions.assertEquals(id,"Id");
    }

    @Test
    void erdNameTest(){
        erd.setErdName("Name");
        String name = erd.getErdName();
        Assertions.assertEquals(name,"Name");
    }

    @Test
    void erdDescriptionTest(){
        erd.setErdDescription("Desc");
        String desc = erd.getErdDescription();
        Assertions.assertEquals(desc,"Desc");
    }

    @Test
    void erdImageUrlTest(){
        erd.setErdImageUrl("URL");
        String url = erd.getErdImageUrl();
        Assertions.assertEquals(url,"URL");
    }
}
