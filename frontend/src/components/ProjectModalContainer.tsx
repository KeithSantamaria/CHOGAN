import React, { useState } from 'react';
import AddToFolder from './AddToFolder';
import ProjectActionsModal from './ProjectActionsModal';

export default function ProjectModalContainer() {

    const [showFolder, setShowFolder] = useState(false);

    return (
        <div>
            {showFolder === false ? (
                    <ProjectActionsModal />
                ) : (
                    <AddToFolder />
                )}
        </div>
    );

}