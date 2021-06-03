import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFolder} from '@fortawesome/free-solid-svg-icons';

type DisplayFolderProps = {
    folderName: string
}

export default function DisplayFolder({ folderName }: DisplayFolderProps) {

    return (
        <div>
            <span className="folder-card">
                <FontAwesomeIcon className='fa-icon-folder fa-2x' icon={faFolder}/>
                <h5>{folderName}</h5>
            </span>
        </div>
    );
}