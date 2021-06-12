import axios from "axios";
import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { resetCreateNewEndpointForm, selectProjectApp, setCreateNewEndpointForm, setEndpoints } from "../redux/projectAppSlice";

const EndpointForm = (props: any) => {
  const projectAppState = useAppSelector(selectProjectApp);
  const dispatch = useAppDispatch();
  const formChangeHandler = (event: any) => {
    const fieldName = event.target.name;
    const value = event.target.value;
    dispatch(setCreateNewEndpointForm({ fieldName, value }));
  };

  const addEndpoint = () => {
    
    //Test
    const projectId = "";

    const queryString = `http://localhost:42069/api/create/project/tag`;
    if (
        projectAppState.createNewTagForm.tagDescription === "" ||
        projectAppState.createNewTagForm.tagName === ""
    ) {
        alert("There is nothing to add");
    } else {
        const endpoint = {
            endpointName: projectAppState.createNewTagForm.tagName,
            endpointDescription: projectAppState.createNewTagForm.tagDescription,
            endpointUrlPattern: projectAppState.createNewEndpointForm.urlPattern,
            projectId : "60c2aecdc4c64aa2db316e6d"
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
  }

  return (
    <div>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={props.modalShow}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create New Endpoint
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Endpoint Name</Form.Label>
              <Form.Control
                name="widgetName"
                type="text"
                placeholder="Documentation"
                onChange={formChangeHandler}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Endpoint URL Pattern</Form.Label>
              <Form.Control
                name="widgetDescription"
                as="textarea"
                rows={3}
                onChange={formChangeHandler}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Endpoint Description</Form.Label>
              <Form.Control
                name="widgetDescription"
                as="textarea"
                rows={3}
                onChange={formChangeHandler}
              />
            </Form.Group>
            <Button onClick={addEndpoint}>Save</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EndpointForm;
