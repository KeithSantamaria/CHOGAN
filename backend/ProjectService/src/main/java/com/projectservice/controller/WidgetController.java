package com.projectservice.controller;

import com.projectservice.models.Widget;
import com.projectservice.services.IWidgetService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@Slf4j
@RequestMapping("/api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class WidgetController {

    private final IWidgetService widgetService;

    /*
    *
    * Create
    *
    * */

    /**
     * Creates a new widget and adds it to the db
     * @param widget The widget to add
     * @return The response entity
     */
    @PostMapping("/create/project/widget")
    public ResponseEntity<List<Widget>> createNewWidget(@RequestParam Widget widget){
      try {
          widgetService.insertWidget(widget);
      }catch (Exception e){
          log.error("Failed to add widget to the DB.");
          return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
      }
      log.info("Successfully added widget to the db");
      return new ResponseEntity<>(widgetService.findByProjectId(widget.getProjectId()),HttpStatus.CREATED);
    }

    /*
    *
    * Read
    *
    * */

    /**
     * Finds a widget from widget Id
     * @param widgetId The id of the widget
     * @return The response entity
     */
    @GetMapping("/read/project/widget")
    public ResponseEntity<Widget> readWidget(@RequestParam String widgetId){
        Widget foundWidget = widgetService.findByWidgetId(widgetId);
        if (foundWidget == null){
            log.error("Failed to find widget of widgetId : {}",widgetId);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        log.info("Successfully retrieved widget of widgetId : {}",widgetId);
        return new ResponseEntity<>(foundWidget,HttpStatus.OK);
    }


    /**
     * Finds a list of all widgets under a given project
     * @param projectId The projectId to find
     * @return The response entity
     */
    @GetMapping("/read/project/widgets")
    public ResponseEntity<List<Widget>> readWidgets(@RequestParam String projectId){
        List<Widget> foundList = widgetService.findByProjectId(projectId);
        log.info("Succesfully retrieved widgets of projectId : {}",projectId);
        return new ResponseEntity<>(foundList,HttpStatus.OK);
    }
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
