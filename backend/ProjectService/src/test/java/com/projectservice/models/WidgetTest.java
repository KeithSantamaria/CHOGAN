package com.projectservice.models;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class WidgetTest {

    private Widget widget;

    @BeforeEach
    void setUp(){
        widget = new Widget();
    }

    @Test
    void widgetIdTest(){
        widget.setWidgetId("Id");
        String id = widget.getWidgetId();
        Assertions.assertEquals(id,"Id");
    }

    @Test
    void projectIdTest(){
        widget.setProjectId("Id");
        String id = widget.getProjectId();
        Assertions.assertEquals(id,"Id");
    }

    @Test
    void widgetNameTest(){
        widget.setWidgetName("Name");
        String name = widget.getWidgetName();
        Assertions.assertEquals(name,"Name");
    }

    @Test
    void widgetDescriptionTest(){
        widget.setWidgetDescription("Desc");
        String desc = widget.getWidgetDescription();
        Assertions.assertEquals(desc,"Desc");
    }
}
