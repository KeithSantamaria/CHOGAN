import React, { useState } from 'react';
import {Button, Modal, Form} from "react-bootstrap";
import "../../../css/home/PopUpModal/popUpModal.css";
import EditProject from "./EditProject";

export default function ProjectActionsModal(props:any) {

    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleOpenEdit=()=>{setEdit(true)};
    const handleCloseEdit=()=>{setEdit(false)};

    const cloneAction = () => { }
    const editAction = () => { handleOpenEdit();}
    const removeAction = () => { }
    const cancelAction = () => { }

    return (
        <div>

            <Modal.Header className='action-header' closeButton></Modal.Header>
            <Modal.Body className='modal-body modal-action-wrapper'>
                <Form>
                    <Button className="project-actions-modal-buttons" onClick={cloneAction}>Clone</Button>
                    <Button className="project-actions-modal-buttons" onClick={editAction}>Edit</Button>
                    <Button className="project-actions-modal-buttons" onClick={removeAction}>Remove</Button>
                    <Button className="project-actions-modal-buttons" onClick={cancelAction}>Cancel</Button>
                </Form>
            </Modal.Body>

            <Modal show={edit} onHide={handleCloseEdit}>
                <EditProject project={props.project}/>
            </Modal>
            
        </div>
    );

}