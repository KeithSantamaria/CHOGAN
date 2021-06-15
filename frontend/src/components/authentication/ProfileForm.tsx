import React, {useEffect, useState} from "react";
import axios from 'axios';
import {useAppSelector, useAppDispatch} from '../../redux/hooks';
import {currentUser, updateUser} from '../../redux/userSlice';
 import {Button, Container, Col} from 'react-bootstrap';
 

export default function ProfileForm( props:any ){
    
    //currentUser hooks
    const currentlyLoggedUser = useAppSelector(currentUser);
    const dispatch = useAppDispatch();

    //useState
    const [email, setEmail] = useState(currentlyLoggedUser.email);
    const [firstName, setFirst] = useState(currentlyLoggedUser.firstName); 
    const [lastName, setLast] = useState(currentlyLoggedUser.lastName);

    //axios call to change user values
    const submitUser = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.setFlag(false);
        const payload = {
            id: currentlyLoggedUser.id,
            password: currentlyLoggedUser.password,
            email: email,
            firstName: firstName,
            lastName: lastName,
            securityQuestionId: currentlyLoggedUser.securityQuestionId,
            securityAnswer: currentlyLoggedUser.securityAnswer //should be hashed
        };

        dispatch(updateUser(payload));

    }


 //return html
    return(
        <div>
            <form onSubmit={submitUser}  className="row justify-content-center">
                <table >
                    <tr>
                        <td>email: </td>
                        <td>
                            <input type="text" placeholder = {currentlyLoggedUser.email} onChange={e => setEmail(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>First Name: </td>
                        <td>
                            <input type="text" placeholder = {currentlyLoggedUser.firstName}  onChange={e => setFirst(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Last Name: </td>
                        <td>
                            <input type="text" placeholder = {currentlyLoggedUser.lastName}  onChange={e => setLast(e.target.value)}/>
                        </td>
                    </tr>
                </table>
                
                <Button variant="primary" type= "submit">Submit Changes</Button>
            </form>
        </div>
    );
}