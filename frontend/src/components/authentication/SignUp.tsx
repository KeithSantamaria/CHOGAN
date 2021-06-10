import React, {useState} from 'react';
import axios from "axios";
import {useForm} from "./loginFormLogic"
import 'bootstrap/dist/css/bootstrap.css';
import '../../css/authentication/login.css'
import { setProjects } from '../../redux/projectAppSlice';
import {useAppSelector, useAppDispatch} from '../../redux/hooks';
import {currentUser, setCurrentUser} from '../../redux/userSlice';


export default function SignUp() {

    const currentlyLoggedUser = useAppSelector(currentUser);
    const dispatchUser = useAppDispatch();

    React.useEffect(() => {
        console.log(currentlyLoggedUser);
    }, [currentlyLoggedUser]);

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    

    //Send value to database
     const submitUser = async () => {
        const userPayload = {
          id : "",
          username: username,
          password: password, //should be hashed
          email: email,
          firstName: "",
          lastName: "",
          securityQuestionId: 0,
          securityAnswer: "" //should be hashed
        }

        dispatchUser(setCurrentUser(userPayload));

//         console.log("submitting user...");
//
//          axios({
//             method: 'post',
//                         url: "http://localhost:6969/user/add_user",
//                         data: { username, password},
//                         // params:{username, password},
//                         headers : {
//                             'Content-Type': 'application/json'
//                         }
//         }).then(result => {
//             console.log(result);
//         })
//         .catch(error => alert(error));
    }

    return(
    <div>
        <p>Hello Keith. I don't believe that you're really 9 foot tall...</p>
        <form onSubmit={submitUser}>
            
            <div className="form-group">
                <p className = "text-center">SignUp</p>
                <input
                    className="form-control center"
                    name='email'
                    id='email'
                    type='email'
                    placeholder='Email'
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                </div>
                <div className="form-group">
                 <input
                    className="form-control center"
                    name='username'
                    id='username'
                    type='username'
                    placeholder='Username'
                    onChange={e => setUsername(e.target.value)}
                    required
                />
                </div>
                <div className="form-group">
                <input
                    className="form-control center"
                    name='password'
                    id='password'
                    type='password'
                    placeholder='Password'
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                </div>
                <button className="btn btn-primary btn-block center" type='submit'>SignUp</button>
        </form>
    </div>);
}