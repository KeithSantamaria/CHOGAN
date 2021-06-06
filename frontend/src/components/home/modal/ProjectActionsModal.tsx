import React, { useState } from 'react';
import {Button, Modal, Form} from "react-bootstrap";
import AddToFolder from "./AddToFolder";
import "../../../css/home/PopUpModal/popUpModal.css";
import EditProject from "./EditProject";

export default function ProjectActionsModal() {

    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleOpenEdit=()=>{setEdit(true)};
    const handleCloseEdit=()=>{setEdit(false)};

    const addToFolderAction = () => { handleShow(); }
    const cloneAction = () => { }
    const editAction = () => { handleOpenEdit();}
    const removeAction = () => { }
    const cancelAction = () => { }



    return (
        <div>

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
                <AddToFolder/>
            </Modal>

            <Modal show={edit} onHide={handleCloseEdit}>
                <EditProject title="sample project" description="this is not a legit project."/>
            </Modal>
            
        </div>
    );

}