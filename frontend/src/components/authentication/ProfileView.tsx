import React from "react";
import {useAppSelector, useAppDispatch} from '../../redux/hooks';
import {currentUser, updateUser} from '../../redux/userSlice';

export default function Profile(){
    const currentlyLoggedUser = useAppSelector(currentUser);
    const userDispatch = useAppDispatch();

    //temporary payload
    const payload ={
        id: "12344",
        username: "boschaw",
        password: "password",
        email: "adambosch8@gmail.com",
        firstName: "Adam",
        lastName: "Bosch",
        securityQuestionId: 1,
        securityAnswer: "bruh"
    }

    function makeUser(){ 
        userDispatch(updateUser(payload));
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