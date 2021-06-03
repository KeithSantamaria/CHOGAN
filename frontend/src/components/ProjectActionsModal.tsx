import React from 'react';

export default function ProjectActionsModal() {

    const addToFolderAction = () => { }
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
        </div>
    );
    
}