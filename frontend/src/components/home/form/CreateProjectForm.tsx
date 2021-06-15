import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { FormEvent, useState } from "react";
import {
  resetCreateNewProjectForm,
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



  // const formChangeHandler = (event: any) => {
  //   const fieldName = event.target.name;
  //   const value = event.target.value;
  //   dispatch(setCreateNewProjectForm({ fieldName, value }));
  // };

  const submit = () => {
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
          dispatch(resetCreateNewProjectForm());
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
        <Form.Group className="project-name-wrapper">
          <Form.Label>Project Name</Form.Label>
          <Form.Control
            name="projectName"
            type="text"
            placeholder="Enter project name"
            // onChange={formChangeHandler}
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
            // onChange={formChangeHandler}
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
