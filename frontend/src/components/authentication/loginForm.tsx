import react, {useState} from "react";
import {useForm} from "./loginFormLogic"
import 'bootstrap/dist/css/bootstrap.css';
import '../../css/authentication/login.css'
import axios from "axios";

export default function LoginForm(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Send value to database
  const submitUser = async () => {
    const loginPayload = {
      password: password, //should be hashed
      email: email,
    }

    axios({
      method: 'get',
      url: "http://localhost:6969/user",
      data: loginPayload,
      headers : {
          'Content-Type': 'application/json'
      }
  }).then(result => {
      if(result.status == 200){
        console.log("okay");
      }
      else{
        console.log("not okay");
      }
      console.log(result);
  })
  .catch(error => alert(error));
  } 



  return(
    <form onSubmit ={submitUser}>
      <div className="form-group">
        <label className = "text-center">Login</label>
        <input
          className="form-control center"
          name='email'
          id='email'
          type='email'
          placeholder='Email'
          onChange={e =>setEmail(e.target.value)}
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
          onChange={e =>setPassword(e.target.value)}
          required
        />
      </div>
      <button className="btn btn-primary btn-block center" type='submit'>Login</button>
    </form>
  );
}