import axios from "axios";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  resetCreateNewWidgetForm,
  selectProjectApp,
  setCreateNewWidgetForm,
  setProject,
} from "../redux/projectAppSlice";

const WidgetForm = (project: any) => {
  const projectAppState = useAppSelector(selectProjectApp);
  const dispatch = useAppDispatch();

  const formChangeHandler = (event: any) => {
    const fieldName = event.target.name;
    const value = event.target.value;
    dispatch(setCreateNewWidgetForm({ fieldName, value }));
  };

  const updateProject = () => {
    const queryString = `http://localhost:42069/api/update/project/widget?projectId=${projectAppState.project.projectId}`;
    if (
      projectAppState.createNewWidgetForm.widgetDescription === "" ||
      projectAppState.createNewWidgetForm.widgetName === ""
    ) {
      alert("There is nothing to add");
    } else {
      
      const widget = {
          widgetName: projectAppState.createNewWidgetForm.widgetName,
          widgetDescription: projectAppState.createNewWidgetForm.widgetDescription,
      };
      console.log(widget);

      axios
        .put(queryString, widget)
        .then((response) => { 
          console.log("response", response);
          dispatch(setProject(response.data));
          dispatch(resetCreateNewWidgetForm());
        })
        .catch((error) => {
          console.log(error);
        });
      
    }
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Widget Name</Form.Label>
          <Form.Control
            name="widgetName"
            type="text"
            placeholder="Documentation"
            onChange={formChangeHandler}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control
            name="widgetDescription"
            as="textarea"
            rows={3}
            onChange={formChangeHandler}
          />
        </Form.Group>
        <Button onClick={updateProject}>Save</Button>
      </Form>
    </div>
  );
};

export default WidgetForm;
