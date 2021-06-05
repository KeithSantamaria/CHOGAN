import React, {useState} from 'react';
import DisplayFolder from "./DisplayFolder";
export default function AddToFolder(){
    const [data, setData] = useState(["school","work"]);
    //

    return (
        <div>
            {data.map(i => {
                return(
                    <DisplayFolder folderName={i}/>
                )
            })}

        </div>
    );
}