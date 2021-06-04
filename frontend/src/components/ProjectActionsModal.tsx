import React, { useState } from 'react';
import {Button, Modal, Form} from "react-bootstrap";
import AddToFolder from "./AddToFolder";
import "../css/PopUpModal/popUpModal.css";

export default function ProjectActionsModal() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addToFolderAction = () => { handleShow(); }
    const cloneAction = () => { }
    const editAction = () => { }
    const removeAction = () => { }
    const cancelAction = () => { }

    return (
        <div>
            {/* <div className='exit-button'><Button className='exit-button' onClick={handleClose}>X</Button></div> */}
            <Modal.Header closeButton>
                <Modal.Title>Actions</Modal.Title>
            </Modal.Header>
            <Form>
                <Button className="project-actions-modal-buttons" onClick={addToFolderAction} >Add To Folder</Button>
                <Button className="project-actions-modal-buttons" onClick={cloneAction}>Clone</Button>
                <Button className="project-actions-modal-buttons" onClick={editAction}>Edit</Button>
                <Button className="project-actions-modal-buttons" onClick={removeAction}>Remove</Button>
                <Button className="project-actions-modal-buttons" onClick={cancelAction}>Cancel</Button>
            </Form>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Folders</Modal.Title>
                </Modal.Header>
                <AddToFolder/>
            </Modal>
        </div>
    );

}