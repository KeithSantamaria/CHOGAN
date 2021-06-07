import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFolder} from '@fortawesome/free-solid-svg-icons';

type DisplayFolderProps = {
    folderName: string
}

export default function DisplayFolder({ folderName }: DisplayFolderProps) {

    return (
        <div className='folder-button'>
            <span className="folder-card">
                <FontAwesomeIcon className='fa-icon-folder fa-2x folder-button-icon' icon={faFolder}/>
                <span className="folder-button-name">{folderName}</span>
            </span>
        </div>
    );
}