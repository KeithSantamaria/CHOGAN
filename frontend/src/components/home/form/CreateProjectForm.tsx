import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { FormEvent, useState } from "react";
import {
  selectProjectApp,
  setCreateNewProjectForm,
  setProjects,
} from "../../../redux/projectAppSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { currentUser } from "../../../redux/userSlice";
import axios from "axios";

export default function CreateProjectForm(props: any) {
  const projectAppState = useAppSelector(selectProjectApp);
  const userAppState = useAppSelector(currentUser);
  const dispatch = useAppDispatch();

  const formChangeHandler = (event: any) => {
    console.log(event.target.name);
    console.log(event.target.value);
    const fieldName = event.target.name;
    const value = event.target.value;
    dispatch(setCreateNewProjectForm({ fieldName, value }));
  };

  const submit = () => {
    // console.log("Why is this submitting?");
    const queryString = "https://localhost:42069/api/create/project";
    if (
      projectAppState.createNewProjectForm.projectName === "" ||
      projectAppState.createNewProjectForm.projectDescription === ""
    ) {
      alert("There is nothing to add");
    } else {
      const project = {
        projectName: projectAppState.createNewProjectForm.projectName,
        projectDescription: projectAppState.createNewProjectForm.projectDescription,
        userId: userAppState.id,
      };
      console.log(project);

      axios
        .post(queryString, project)
        .then((response) => {
          console.log("response", response);
          const projectData = response.data;
          dispatch(setProjects(projectData));
          // dispatch(resetCreateNewTagForm());
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <Container className="create-proj-form-container">
      <Form>
        <h4>New Project</h4>
        {/* <div>Create new project name and Description</div>
        <div>Manage your project</div> */}

        <Form.Group className="project-name-wrapper">
          <Form.Label>Project Name</Form.Label>
          <Form.Control
            name="projectName"
            placeholder="Enter project name"
            onChange={formChangeHandler}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="projectDescription"
            className="modal-create-form-textarea"
            rows={5}
            onChange={formChangeHandler}
          />
        </Form.Group>

        <span style={{ float: "right" }} className="btn-group-wrapper">
          <span>
            <Button variant="outline" onClick={props.handleClose}>
              Close
            </Button>
          </span>
          <Button variant="primary" onClick={submit}>
            Create
          </Button>
        </span>
      </Form>
    </Container>
  );
}
