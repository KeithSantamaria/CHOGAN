import React from "react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  resetCreateNewERDiagramForm,
  selectProjectApp,
  setCreateNewERDForm,
  setERDiagrams,
} from "../../redux/projectAppSlice";
import { Button, Form, Container } from "react-bootstrap";

const ERDForm = () => {
  const [imgDat, setImgDat] = React.useState("");
  const projectAppState = useAppSelector(selectProjectApp);
  const dispatch = useAppDispatch();

  const formChangeHandler = (event: any) => {
    const fieldName = event.target.name;
    const value = event.target.value;
    dispatch(setCreateNewERDForm({ fieldName, value }));
  };

  const addERD = () => {
    // Test
    const projectId = "60bc36b65d2b0da1deb9ada2";
    const queryString = `http://localhost:42069/api/create/project/ERD`;
    if (
      projectAppState.createNewERDForm.erdName === "" ||
      projectAppState.createNewERDForm.erdDescription === "" ||
      imgDat === ""
    ) {
      alert("There is nothing to add");
    } else {
      const erd = {
        erdName: projectAppState.createNewERDForm.erdName,
        erdDescription: projectAppState.createNewERDForm.erdDescription,
        erdImageUrl: imgDat,
        //production

        //projectId: projectAppState.project.projectId,

        //test
        projectId: projectId,
      };
      console.log(erd);
      axios
        .post(queryString, erd)
        .then((response) => {
            // console.log("response", response);
            const erdData = response.data;
            dispatch(setERDiagrams(erdData));
            dispatch(resetCreateNewERDiagramForm());
        })
        .catch((error) => {
            console.log(error);
        })
    }
  };

  const encodeImageFileAsURL = (event: any) => {
    const value = event.target.files;
    if (value.length > 0) {
      let fileToLoad = value[0];
      let fileReader = new FileReader();
      fileReader.onload = (fileLoadedEvent: any) => {
        let sourceData = fileLoadedEvent.target.result; // <--- data: base64
        // dispatch(setWireframeImageInForm(sourceData));
        setImgDat(sourceData);
        // console.log(sourceData);
        alert(sourceData);

      };
      fileReader.readAsDataURL(fileToLoad);
    }
  };

  return (
    <Container className="create-proj-form-container">
      <Form>
        <Form.Group className="project-name-wrapper" controlId="exampleForm.ControlInput1">
          <Form.Label>ERD Name</Form.Label>
          <Form.Control
            name="erdName"
            type="text"
            placeholder="Name"
            onChange={formChangeHandler}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>ERD Image</Form.Label>
          <Form.Control
            name="erdImg"
            type="file"
            placeholder="/api/create/endpoint"
            onChange={encodeImageFileAsURL}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>ERD Description</Form.Label>
          <Form.Control
            className="modal-create-form-textarea"
            name="erdDescription"
            as="textarea"
            rows={3}
            onChange={formChangeHandler}
          />
        </Form.Group>
        <Button onClick={addERD}>Save</Button>
      </Form>
    </Container>
    );
};

export default ERDForm;
