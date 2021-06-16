import {useState} from 'react';
import axios from "axios";
import { Button, Form, Container } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {createWidget,selectProjectApp, getAllWidgetsByProjectId} from "../../redux/projectAppSlice";

const WidgetForm = () => {
  const [widgetName, setWidgetName] = useState("");
  const [widgetDescription, setDescription] = useState("");

  const projectAppState = useAppSelector(selectProjectApp);
  const dispatch = useAppDispatch();
  const projectId = projectAppState.project.projectId;

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const widget = {
      widgetName :widgetName,
      widgetDescription : widgetDescription,
      projectId : projectId
    }
    dispatch(createWidget(widget));
  }

  return (
    <Container className="create-proj-form-container">
      <Form onSubmit = {submit}>
        <Form.Group className="project-name-wrapper" controlId="exampleForm.ControlInput1">
          <Form.Label>Widget Name</Form.Label>
          <Form.Control
            name="widgetName"
            type="text"
            placeholder="Documentation"
            onChange={(e) => {setWidgetName(e.target.value)}}
            required
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Widget Description</Form.Label>
          <Form.Control
            className="modal-create-form-textarea"
            name="widgetDescription"
            as="textarea"
            rows={3}
            onChange={(e) => {setDescription(e.target.value)}}
            required
          />
        </Form.Group>
        <Button type='submit'>Save</Button>
      </Form>
    </Container>
  );
};

export default WidgetForm;
