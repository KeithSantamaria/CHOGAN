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
            <Form>
                <Button className="project-actions-modal-buttons" onClick={addToFolderAction} >Add To Folder</Button>
                <Button className="project-actions-modal-buttons" onClick={cloneAction}>Clone</Button>
                <Button className="project-actions-modal-buttons" onClick={editAction}>Edit</Button>
                <Button className="project-actions-modal-buttons" onClick={removeAction}>Remove</Button>
                <Button className="project-actions-modal-buttons" onClick={cancelAction}>Cancel</Button>
            </Form>

            <Modal show={show} onHide={handleClose}>
                <Modal show={show} onHide={handleClose}>
                    <AddToFolder/>
                </Modal>
            </Modal>
        </div>
    );

}