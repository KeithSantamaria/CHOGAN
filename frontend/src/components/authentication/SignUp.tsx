import React, {useState} from 'react';
import axios from "axios";
import {useForm} from "./loginFormLogic"

const SignUp: React.FC = () => {

//     React.useEffect(() => {
//
//     }, []);

//     const [email, setEmail] = useState("");
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
    const initialState = {
        email: "",
        username:"",
        password: "",
    };

     const { onChange, onSubmit, values } = useForm(
            //submitUser,
            initialState
        );

    //Send value to database
     const submitUser = async () => {
//         //e.preventDefault();
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
        <form onSubmit={onSubmit}>
            <p>SignUp</p>
                <input
                    name='email'
                    id='email'
                    type='email'
                    placeholder='Email'
                    onChange={onChange}
                    required
                />
                 <input
                    name='username'
                    id='username'
                    type='username'
                    placeholder='Username'
                    onChange={onChange}
                    required
                />
                <input
                    name='password'
                    id='password'
                    type='password'
                    placeholder='Password'
                    onChange={onChange}
                    required
                />
                <button type='submit'>SignUp</button>
        </form>
    </div>)

}

export default SignUp;