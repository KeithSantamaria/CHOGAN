import React, {useState} from 'react';
import {Button, Modal, Form} from "react-bootstrap";
import "../../../css/home/PopUpModal/editProject.css"
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { selectProjectApp, setProject, setProjectEndpointsState } from '../../../redux/projectAppSlice';

// type ProjectProp = {
//     title: string,
//     description: string
// }

export default function EditProject(props:any) {
    console.log(props.project.projectName+ "what is here");
    const [currTitle, setCurrTitle] = useState(props.project.projectName);
    const [currDescription, setCurrDescription] = useState(props.project.projectDescription);
    // onChange={(e)=>{currTitle=e.target.value}}
    // onChange={(e)=>{currDescription=e.target.value}}
    const projectAppState= useAppSelector(selectProjectApp);
    const dispatch = useAppDispatch();
    function saveChanges() {
        props.project.projectName=currTitle;
        props.project.projectDescription=currDescription;
        dispatch(setProject(props.project));

    }

    return (
        <div>
            <Modal.Header closeButton className="action-header" >
                <Modal.Title >Edit Project</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="edit-card">
                    <input type="text" value={currTitle}
                        onChange={(e)=>{setCurrTitle(e.target.value)}}/>
                    <input type="text" value={currDescription}
                        onChange={(e)=>{setCurrDescription(e.target.value)}}/>
                        <Button variant="success" className="save-changes" onClick={saveChanges}>Save Changes</Button>
                </Form>
            </Modal.Body>
        </div>
    );
}