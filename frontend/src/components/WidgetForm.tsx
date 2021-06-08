import axios from 'axios';
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { selectProjectApp, setCreateNewWidgetForm, setProject } from '../redux/projectAppSlice';

const WidgetForm = (project:any)=> {
    
    const projectAppState = useAppSelector(selectProjectApp);
    const dispatch = useAppDispatch();

    const formChangeHandler = (event: any) => {
        const fieldName = event.target.name;
        const value = event.target.value;
        dispatch(setCreateNewWidgetForm({ fieldName, value }));
      };

    const updateProject = () => {
        const queryString = `http://localhost:42069/api/update/project`;
        
        const body = {
            params: {
              project: projectAppState.project,
            },
          };
        // Test query string works; comment when ready to test prod
        // const queryString = `http://localhost:42069/api/read/project?projectId=60bc36b65d2b0da1deb9ada2`;
        // Production query string; uncomment when ready to test prod
        // const queryString = `http://localhost:42069/api/read/project?projectId=${projectId}`; 
        axios
          .put(queryString, body)
          .then((response) => {
            console.log("response", response);
            const projectData = response.data;
            dispatch(setProject(projectData));
          })
          .catch((error) => {
            console.log("There was an error: ", error);
          });
      };

    return (
        <div>
            <Form>            
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Widget Name</Form.Label>
                <Form.Control name="widgetName" type="text" placeholder="Documentation" onChange={formChangeHandler} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control name="widgetDescription" as="textarea" rows={3} onChange={formChangeHandler} />
            </Form.Group>
            <Button onClick={updateProject}>Save</Button>
            </Form>
        </div>
    )
}

export default WidgetForm
