import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  createWireframe,
  selectProjectApp,
  setCreateNewWireframeForm,
} from "../../redux/projectAppSlice";
import { Button, Form, Container } from "react-bootstrap";

const WireframeForm = () => {
  const [imgDat, setImgDat] = React.useState("");
  const projectAppState = useAppSelector(selectProjectApp);
  const dispatch = useAppDispatch();
  const projectId = projectAppState.project.projectId;

  const formChangeHandler = (event: any) => {
    const fieldName = event.target.name;
    const value = event.target.value;
    dispatch(setCreateNewWireframeForm({ fieldName, value }));
  };

  const addWireframe = () => {
    if (
      projectAppState.createNewWireframeForm.wireframeName === "" ||
      projectAppState.createNewWireframeForm.wireframeDescription === "" ||
      imgDat === ""
    ) {
      console.log("ERROR: There is nothing to add");
    } else {
      const wireframe = {
        wireframeName: projectAppState.createNewWireframeForm.wireframeName,
        wireframeDescription:
          projectAppState.createNewWireframeForm.wireframeDescription,
        wireframeImageUrl: imgDat,
        projectId: projectId,
      };
      dispatch(createWireframe(wireframe));
    }
  };

  const encodeImageFileAsURL = (event: any) => {
    const value = event.target.files;
    if (value.length > 0) {
      let fileToLoad = value[0];
      let fileReader = new FileReader();
      fileReader.onload = (fileLoadedEvent: any) => {
        let sourceData = fileLoadedEvent.target.result;
        setImgDat(sourceData);
      };
      fileReader.readAsDataURL(fileToLoad);
    }
  };
  
  return (
    <Container className="create-proj-form-container">
      <Form>
        <Form.Group className="project-name-wrapper" controlId="exampleForm.ControlInput1">
          <Form.Label>Wireframe Name</Form.Label>
          <Form.Control
            name="wireframeName"
            type="text"
            placeholder="Documentation"
            onChange={formChangeHandler}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Wireframe Image</Form.Label>
          <Form.Control
            name="wireframeImg"
            type="file"

            placeholder="/api/create/endpoint"
            onChange={encodeImageFileAsURL}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Wireframe Description</Form.Label>
          <Form.Control
            name="wireframeDescription"
            as="textarea"
            rows={3}
            onChange={formChangeHandler}
          />
        </Form.Group>
        <Button onClick={addWireframe}>Save</Button>
      </Form>
    </Container>
  );
};

export default WireframeForm;
