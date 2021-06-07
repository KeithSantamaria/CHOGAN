import React, {useState} from 'react';
import {Button, Modal, Form} from "react-bootstrap";
import "../../../css/home/PopUpModal/editProject.css"

type ProjectProp = {
    title: string,
    description: string
}

export default function EditProject({title, description }: ProjectProp) {
    const [currTitle, setCurrTitle] = useState(title);
    const [currDescription, setCurrDescription] = useState(description);
    // onChange={(e)=>{currTitle=e.target.value}}
    // onChange={(e)=>{currDescription=e.target.value}}


    function saveChanges() {
        alert("save this shizzz");
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