import React from "react";
import {useAppSelector, useAppDispatch} from '../../redux/hooks';
import {currentUser, updateUser} from '../../redux/userSlice';

export default function Profile(){
    const currentlyLoggedUser = useAppSelector(currentUser);
    const userDispatch = useAppDispatch();

    function makeUser(){ 
        userDispatch(updateUser(currentlyLoggedUser));
    }

    React.useEffect(() => {
        console.log(currentlyLoggedUser.id);
      },[currentlyLoggedUser])

    return(
        <div className="content" onLoad={ e => makeUser()}>
            <div className="row justify-content-center">
                <table>
                    <tr>
                        <td>email: </td>
                        <td>{currentlyLoggedUser.email}</td> 
                    </tr>
                    <tr>
                        <td>First Name:</td> 
                        <td>{currentlyLoggedUser.firstName}</td>
                    </tr>
                    <tr>
                        <td>Last Name:</td> 
                        <td>{currentlyLoggedUser.lastName}</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}