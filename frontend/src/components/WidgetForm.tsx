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

  const addWidget = () => {
    // const queryString = `http://localhost:42069/api/create/project/widget?projectId=${projectAppState.project.projectId}`;
    const queryString = `http://localhost:42069/api/create/project/widget`;
    if (
      projectAppState.createNewWidgetForm.widgetDescription === "" ||
      projectAppState.createNewWidgetForm.widgetName === ""
    ) {
      alert("There is nothing to add");
    } else {
      const widget = {
        widgetName: projectAppState.createNewWidgetForm.widgetName,
        widgetDescription: projectAppState.createNewWidgetForm.widgetDescription,
        projectId: "60bc36b65d2b0da1deb9ada2"
      };
      console.log(widget);

      axios
        .post(queryString, widget)
        .then((response) => {
          console.log("response", response);
          const projectData = response.data;
          dispatch(setProject(projectData));
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
          <Form.Label>Widget Description</Form.Label>
          <Form.Control
            name="widgetDescription"
            as="textarea"
            rows={3}
            onChange={formChangeHandler}
          />
        </Form.Group>
        <Button onClick={addWidget}>Save</Button>
      </Form>
    </div>
  );
};

export default WidgetForm;
