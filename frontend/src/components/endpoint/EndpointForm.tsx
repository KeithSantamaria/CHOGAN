import axios from "axios";
import React from "react";
import { Button, Form, Container } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  resetCreateNewEndpointForm,
  selectProjectApp,
  setCreateNewEndpointForm,
  setEndpoints,
} from "../../redux/projectAppSlice";

const EndpointForm = () => {
  const projectAppState = useAppSelector(selectProjectApp);
  const dispatch = useAppDispatch();

  const formChangeHandler = (event: any) => {
    const fieldName = event.target.name;
    const value = event.target.value;
    dispatch(setCreateNewEndpointForm({ fieldName, value }));
  };

  const addEndpoint = () => {
    // Test
    const projectId = "60bc36b65d2b0da1deb9ada2";

    const queryString = `http://localhost:42069/api/create/project/endpoint`;
    if (
      projectAppState.createNewEndpointForm.endpointDescription === "" ||
      projectAppState.createNewEndpointForm.endpointName === "" ||
      projectAppState.createNewEndpointForm.urlPattern === "" 
    ) {
      alert("There is nothing to add");
    } else {
      const endpoint = {
        endpointName: projectAppState.createNewEndpointForm.endpointName,
        endpointDescription: projectAppState.createNewEndpointForm.endpointDescription,
        endpointUrlPattern: projectAppState.createNewEndpointForm.urlPattern,
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
    <Container className="create-proj-form-container">
      <Form>
        <Form.Group className="project-name-wrapper" controlId="exampleForm.ControlInput1">
          <Form.Label>Endpoint Name</Form.Label>
          <Form.Control
            name="endpointName"
            type="text"
            placeholder="Documentation"
            onChange={formChangeHandler}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Endpoint URL Pattern</Form.Label>
          <Form.Control
            name="urlPattern"
            type="text"
            placeholder="/api/create/endpoint"
            onChange={formChangeHandler}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Endpoint Description</Form.Label>
          <Form.Control
            className="modal-create-form-textarea"
            name="endpointDescription"
            as="textarea"
            rows={3}
            onChange={formChangeHandler}
          />
        </Form.Group>
        <Button onClick={addEndpoint}>Save</Button>
      </Form>
    </Container>
  );
};

export default EndpointForm;
