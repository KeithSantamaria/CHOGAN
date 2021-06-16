import React, {useState} from "react";
import {useAppSelector} from '../redux/hooks';
import {currentUser} from '../redux/userSlice';
import {Button} from 'react-bootstrap';
import '../css/authentication/UserProfile.css';
import Profile from "../components/authentication/ProfileView";
import ProfileForm from "../components/authentication/ProfileForm";
import TopNavbar from "../components/TopNavbar";


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
          setBtn("View Profile");
          setTitle("Edit Profile");
        }
        if(profileFlag === true){
          setFlag(false);
          setBtn("Edit Profile");
          setTitle("User Profile");
        }
      }

      const RenderProfile = () => {
        if(profileFlag === true){
          return <ProfileForm setFlag = {setFlag}/>
        }
        else{
          return <Profile/>
        }  
      }

    return(
      <div>
        <TopNavbar/>
        <div className="user-background">
          <div className="profile-box"> 
            <h2>{title}</h2>
            <div className="profile-content">
              <div><RenderProfile/></div>
            </div>
            <Button className = "edit-profile-button" onClick= { e => flagSetter() }>{btnString}</Button>
          </div>
        </div>   
      </div>   
    );
}