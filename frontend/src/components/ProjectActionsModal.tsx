import React, { useState } from 'react';
import {Button, Modal} from "react-bootstrap";
import AddToFolder from "./AddToFolder";

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
            <button onClick={addToFolderAction} >Add To Folder</button>
            <button onClick={cloneAction}>Clone</button>
            <button onClick={editAction}>Edit</button>
            <button onClick={removeAction}>Remove</button>
            <button onClick={cancelAction}>Cancel</button>

            <Modal show={show} onHide={handleClose}>
                <Modal show={show} onHide={handleClose}>
                    <AddToFolder/>
                </Modal>
            </Modal>
        </div>
    );

}