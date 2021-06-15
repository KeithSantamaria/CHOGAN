import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFolder} from "@fortawesome/free-solid-svg-icons";

export default function FolderCard(props:any) {
  return (
    <>
         {props.folders.map((folder:any) => (
             <div className="outer-folder-wrapper" style={{display: "inline-block"}}>
                <span className="folder-card-wrapper">
                    <FontAwesomeIcon className="fa-icon-folder fa-2x" icon={faFolder} />
                    <span id={folder.id}>{folder.name}</span>
                </span>
             </div>
            
           
        ))}
    </>
  );
}
