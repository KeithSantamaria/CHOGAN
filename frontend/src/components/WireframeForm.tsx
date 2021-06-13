import React from "react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  resetCreateNewWireframeForm,
  selectProjectApp,
  setCreateNewWireframeForm,
  setWireframes,
} from "../redux/projectAppSlice";
import { Button, Form } from "react-bootstrap";

const WireframeForm = () => {
  const [imgDat, setImgDat] = React.useState("");
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
      // projectAppState.createNewWireframeForm.wireframeImg === "" || 
      imgDat === ""
    ) {
      alert("There is nothing to add");
    } else {
      const wireframe = {
        wireframeName: projectAppState.createNewWireframeForm.wireframeName,
        wireframeDescription:
          projectAppState.createNewWireframeForm.wireframeDescription,
        wireframeImageUrl: imgDat,

        //production
        
        //projectId: projectAppState.project.projectId,

        //test
        projectId: projectId,
      };
      console.log(wireframe);
      axios
        .post(queryString, wireframe)
        .then((response) => {
          console.log("response", response);
          const wireframeData = response.data;
          dispatch(setWireframes(wireframeData));
          dispatch(resetCreateNewWireframeForm());
        })
        .catch((error) => {
          console.log(error);
        });
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

  // const imageChange = (event: any) => {
  //     encodeImageFileAsURL(event);
  //     formChangeHandler(event);
  // }
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
    </div>
  );
};

export default WireframeForm;
