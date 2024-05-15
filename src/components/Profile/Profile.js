import React from "react";
import "./Profile.css";
import Menu from '../Menu/Menu';


function Profile(props) {
    function signOut(){
        props.back()
        props.navigate('/');
      }
  return (
    <>
    <div className="profile">
    <p className="profile__btn" onClick={signOut}>Выйти</p>
         <Menu />
    </div>
    </>
  );
}

export default Profile;
