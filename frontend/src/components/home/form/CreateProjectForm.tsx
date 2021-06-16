import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import {createProject} from "../../../redux/projectAppSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { currentUser } from "../../../redux/userSlice";

export default function CreateProjectForm(props: any) {
  const currentlyLoggedUser = useAppSelector(currentUser);
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useAppDispatch();

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = {
      userId : currentlyLoggedUser.id,
      projectName : projectName,
      projectDescription : description
    }
    dispatch(createProject(payload));
  };

  return (
    <Container className="create-proj-form-container">
      <Form onSubmit = {submit}>
        <h4>New Project</h4>
        <Form.Group className="project-name-wrapper">
          <Form.Label>Project Name</Form.Label>
          <Form.Control
            name="projectName"
            type="text"
            placeholder="Enter project name"
            onChange={(e) => {setProjectName(e.target.value)}}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            name="projectDescription"
            className="modal-create-form-textarea"
            rows={5}
            onChange={(e) => {setDescription(e.target.value)}}
            required
          />
        </Form.Group>

        <span style={{ float: "right" }} className="btn-group-wrapper">
          <span>
            <Button variant="outline" onClick={props.handleClose}>
              Close
            </Button>
          </span>
          <Button variant="primary" type='submit'>
            Create
          </Button>
        </span>
      </Form>
    </Container>
  );
}