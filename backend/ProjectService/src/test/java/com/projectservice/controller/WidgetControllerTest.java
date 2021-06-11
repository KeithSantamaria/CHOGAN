package com.projectservice.controller;

import com.projectservice.models.Widget;
import com.projectservice.services.IWidgetService;
import com.projectservice.services.WidgetService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

public class WidgetControllerTest {

    private final IWidgetService widgetService = Mockito.mock(WidgetService.class);

    private final WidgetController widgetController = new WidgetController(widgetService);

    /*
    *
    * Create
    *
    * */

    @Test
    void createNewWidgetSuccessTest(){
        Widget widget = new Widget();

        ResponseEntity<List<Widget>> response = widgetController.createNewWidget(widget);

        Assertions.assertEquals(response.getStatusCode(), HttpStatus.CREATED);
    }

    @Test
    void createNewWidgetFailureTest(){
        Widget widget = new Widget();

        Mockito.doThrow(new Exception());

        ResponseEntity<List<Widget>> response = widgetController.createNewWidget(widget);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    /*
    *
    * Read
    *
    * */

    @Test
    void readWidgetSuccessTest(){
        String widgetId = "Id";
        Widget widget = new Widget();

        Mockito.when(widgetService.findByWidgetId(widgetId)).thenReturn(widget);

        ResponseEntity<Widget> response = widgetController.readWidget(widgetId);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.OK);
    }

    @Test
    void readWidgetFailureTest(){
       String widgetId = "Id";

       Mockito.when(widgetService.findByWidgetId(widgetId)).thenReturn(null);

       ResponseEntity<Widget> response = widgetController.readWidget(widgetId);

       Assertions.assertEquals(response.getStatusCode(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Test
    void readWidgetsTest(){
        String projectId = "Id";
        List<Widget> list = new ArrayList<>();

        Mockito.when(widgetService.findByProjectId(projectId)).thenReturn(list);

        ResponseEntity<List<Widget>> response = widgetController.readWidgets(projectId);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.OK);
    }

    /*
    *
    * Update
    *
    * */

    @Test
    void updateWidgetSuccessTest(){
        Widget widget = new Widget();

        Mockito.when(widgetService.updateWidget(widget)).thenReturn(widget);

        ResponseEntity<List<Widget>> response = widgetController.updateWidget(widget);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.OK);
    }

    @Test
    void updateWidgetFailureTest(){
        Widget widget = new Widget();

        Mockito.when(widgetService.updateWidget(widget)).thenReturn(null);

        ResponseEntity<List<Widget>> response = widgetController.updateWidget(widget);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    /*
    *
    * Delete
    *
    * */
}
