import React, {useState} from "react";
import {useAppSelector} from '../redux/hooks';
import {currentUser} from '../redux/userSlice';
import {Button, Container, Col} from 'react-bootstrap';
import '../css/authentication/UserProfile.css';
import Profile from "../components/authentication/Profile";
import ProfileForm from "../components/authentication/ProfileForm";


export default function UserProfile(){
    const currentlyLoggedUser = useAppSelector(currentUser);

    const [profileFlag, setFlag] = useState(false);
    const[title, setTitle] = useState("User Profile");
    const[btnString, setBtn] = useState("Edit Profile");


    React.useEffect(() => {
        console.log(currentlyLoggedUser.id);
      },[currentlyLoggedUser])


      function flagSetter(){
        if(profileFlag === false){
          setFlag(true);
          setBtn("Finish");
          setTitle("Edit Profile");
        }
        if(profileFlag === true){
          setFlag(false);
          setBtn("Edit Profile");
          setTitle("User Profile");
        }
      }

      const RenderProfile = () => {
        if(profileFlag === true){return <ProfileForm/>}
        else{return <Profile/>}  
      }

    return(
      
        <div className="content"> 
          <h2>{title}</h2>
          <Button onClick= { e => flagSetter() }>{btnString}</Button>{' '}
          <div><RenderProfile/></div>
        </div>      
    );
}