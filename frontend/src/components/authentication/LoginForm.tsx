import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../../css/authentication/login.css'
import {useAppDispatch} from '../../redux/hooks';
import {loginUser} from '../../redux/userSlice';


export default function LoginForm(){

  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Send value to database
  const submitUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const loginPayload = {
      password: password, //should be hashed
      email: email,
    }
    // This is calling the redux thunk which does the axios call for us. See 'src/redux/userSlice.tsx' for details
    dispatch(loginUser(loginPayload));
  } 

  return(
    <form onSubmit ={submitUser}>
      <div className="form-group">
        <h3 className = "text-center">Login</h3>
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
