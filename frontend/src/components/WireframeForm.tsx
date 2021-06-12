import React from "react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  resetCreateNewEndpointForm,
  selectProjectApp,
  setCreateNewWireframeForm,
  setEndpoints,
} from "../redux/projectAppSlice";
import { Button, Form } from "react-bootstrap";
const WireframeForm = () => {
  const projectAppState = useAppSelector(selectProjectApp);
  const dispatch = useAppDispatch();

  const formChangeHandler = (event: any) => {
    const fieldName = event.target.name;
    const value = event.target.value;
    dispatch(setCreateNewWireframeForm({ fieldName, value }));
  };

  const addWireframe = () => {
    // Test
    const projectId = "60bc36b65d2b0da1deb9ada2";

    const queryString = `http://localhost:42069/api/create/project/wireframe`;
    if (
      projectAppState.createNewWireframeForm.wireframeName === "" ||
      projectAppState.createNewWireframeForm.wireframeDescription === "" ||
      projectAppState.createNewWireframeForm.wireframeImg === ""
    ) {
      alert("There is nothing to add");
    } else {
      const endpoint = {
        wireframeName: projectAppState.createNewWireframeForm.wireframeName,
        wireframeDescription:
          projectAppState.createNewWireframeForm.wireframeDescription,
        wireframeImg: projectAppState.createNewWireframeForm.wireframeImg,
        //production
        //projectId: projectAppState.project.projectId,

        //test
        projectId: projectId,
      };

      axios
        .post(queryString, endpoint)
        .then((response) => {
          console.log("response", response);
          const endpointData = response.data;
          dispatch(setEndpoints(endpointData));
          dispatch(resetCreateNewEndpointForm());
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
          <Form.Label>Wireframe Name</Form.Label>
          <Form.Control
            name="wireframeName"
            type="text"
            placeholder="Documentation"
            onChange={formChangeHandler}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Endpoint URL Pattern</Form.Label>
          <Form.Control
            name="wireframeImg"
            type="file"
            placeholder="/api/create/endpoint"
            onChange={formChangeHandler}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Endpoint Description</Form.Label>
          <Form.Control
            name="wireframeDescription"
            as="textarea"
            rows={3}
            onChange={formChangeHandler}
          />
        </Form.Group>
        <Button onClick={addWireframe}>Save</Button>
      </Form>
    </div>
  );
};

export default WireframeForm;
