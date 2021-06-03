import React, {useState} from 'react';

type DisplayFolderProps = {
    folderName: string
}

export default function DisplayFolder({ folderName }: DisplayFolderProps) {

    return (
        <div>
            <img src="" alt="folder-symbol"/>
            <h5>{folderName}</h5>
        </div>
    );
}