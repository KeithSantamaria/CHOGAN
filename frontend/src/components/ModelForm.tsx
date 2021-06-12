import axios from "axios";
import React from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  resetCreateNewModelForm,
  selectProjectApp,
  setCreateNewModelForm,
  setModels,
} from "../redux/projectAppSlice";

const ModelForm = () => {
  const projectAppState = useAppSelector(selectProjectApp);
  const dispatch = useAppDispatch();

  const formChangeHandler = (event: any) => {
    const fieldName = event.target.name;
    const value = event.target.value;
    dispatch(setCreateNewModelForm({ fieldName, value }));
  };

  const addModel = () => {
    // Test
    const projectId = "60bc36b65d2b0da1deb9ada2";
    
    const queryString = `http://localhost:42069/api/create/project/model`;
    if (
      projectAppState.createNewModelForm.modelName === "" ||
      projectAppState.createNewModelForm.modelMetadata === []
    ) {
      alert("There is nothing to add");
    } else {
      const model = {
        modelName: projectAppState.createNewModelForm.modelName,
        modelMetadata: projectAppState.createNewModelForm.modelMetadata,
        //production
        //projectId: projectAppState.project.projectId,

        //test
        projectId: projectId,
      };

      axios
        .post(queryString, model)
        .then((response) => {
          console.log("response", response);
          const modelData = response.data;
          dispatch(setModels(modelData));
          dispatch(resetCreateNewModelForm());
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
          <Form.Label>Model Name</Form.Label>
          <Form.Control
            name="modelName"
            type="text"
            // placeholder="Employees"
            onChange={formChangeHandler}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Table>
            <tr>
              <th>Field</th>
              <th>Type</th>
            </tr>
            <tr>
              <td>
                {" "}
                <Form.Control
                  name="field"
                  type="text"
                  onChange={formChangeHandler}
                />
              </td>
              <td>
                {" "}
                <Form.Control
                  name="type"
                  type="text"
                  onChange={formChangeHandler}
                />
              </td>
            </tr>
          </Table>
        </Form.Group>
        <Button onClick={addModel}>Save</Button>
      </Form>
    </div>
  );
};

export default ModelForm;
