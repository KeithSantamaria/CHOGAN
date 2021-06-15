import React from "react";
import {useAppSelector, useAppDispatch} from '../../redux/hooks';
import {currentUser, setCurrentUser} from '../../redux/userSlice';

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
        userDispatch(setCurrentUser(payload));
    }

    React.useEffect(() => {
        console.log(currentlyLoggedUser.currentUser.id);
      },[currentlyLoggedUser])

    return(
        <div className="content" onLoad={ e => makeUser()}>
            <div className="row justify-content-center">
                <table>
                    <tr>
                        <td>email: </td>
                        <td>{payload.email}</td> 
                    </tr>
                    <tr>
                        <td>username: </td>
                        <td>{payload.username}</td> 
                    </tr>
                    <tr>
                        <td>First Name:</td> 
                        <td>{payload.firstName}</td>
                    </tr>
                    <tr>
                        <td>Last Name:</td> 
                        <td>{payload.lastName}</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}