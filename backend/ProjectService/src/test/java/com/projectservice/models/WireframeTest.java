package com.projectservice.models;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class WireframeTest {

    private Wireframe wireframe;

    @BeforeEach
    void setUp(){
        wireframe = new Wireframe();
    }

    @Test
    void wireframeIdTest(){
        wireframe.setWireframeId("Id");
        String id = wireframe.getWireframeId();
        Assertions.assertEquals(id,"Id");
    }

    @Test
    void projectIdTest(){
        wireframe.setProjectId("Id");
        String id = wireframe.getProjectId();
        Assertions.assertEquals(id,"Id");
    }

    @Test
    void wireframeNameTest(){
        wireframe.setWireframeName("Name");
        String name = wireframe.getWireframeName();
        Assertions.assertEquals(name,"Name");
    }

    @Test
    void wireframeDescriptionTest(){
        wireframe.setWireframeDescription("Desc");
        String desc = wireframe.getWireframeDescription();
        Assertions.assertEquals(desc,"Desc");
    }

    @Test
    void wireframeImageUrlTest(){
        wireframe.setWireframeImageUrl("URL");
        String url = wireframe.getWireframeImageUrl();
        Assertions.assertEquals(url,"URL");
    }
}
