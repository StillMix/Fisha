import React, { useState } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Main from "./Main/Main";
import KinoOpi from "./KinoOpi/KinoOpi";
import FilmOpi from "./FilmOpi/FilmOpi";
import Mybil from "./Mybil/Mybil";
import Login from "./Login/Login";
import {mestoAuth} from '../utils/Auth';
import api from '../utils/Api.js';
import Register from "./Register/Register.js";

function App() {
  const [iskinoOpiOpen, setIskinoOpiOpen] = useState(false);
  const [selectedkinoOp, setselectedkinoOp] = useState(null);
  const [iskinoOpen, setIskinoOpen] = useState(false);
  const [selectedkino, setselectedkino] = useState(null);
  const [loggedIn, setloggedIn] = useState(false);
  const [userEmail, setuserEmail] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setisImagePopupOpen] = useState(false);
  const [isUserEmailInfoOpen, setisUserEmailInfoOpen] = useState(false);
  const [isInfoToolTip, setisInfoToolTip] = useState(false);
  const [selectedCard, setselectedCard] = useState(null);
  const [cards, setCards] = useState([])

  const navigate = useNavigate();
  function toLogin() {
    navigate('/')
  }
  function toReg() {
    navigate('/reg')
  }



  
 

 function get() {
  api.getUserInfo().then((user) => {
    if(user){
      setCurrentUser(user);
      api.getCards().then((data) => {
        if(data){
        setCards(data.data)
        setloggedIn(true)
        navigate('/main');
        }
    }).catch((err) => {
        console.log(err)
    })
    }
  }).catch((err) => {
    console.log(err)
});
}

function tokenCheck() {
  if(localStorage.getItem('jwt')){
 mestoAuth.getContent().then((res) => {
   if(res.message === 'Необходима авторизация'){
    console.log(res)
   }else{
     const jwt = res;
     setuserEmail(jwt.data.email)
     setCurrentUser(res);
   api.getCards().then((data) => {
     if(data){
     setCards(data.data)
     setloggedIn(true)
    navigate('/main');
     }
 }).catch((err) => {
     console.log(err)
 })
   }
 }).catch(err => console.log(err));
}
}
 
function handleLogin(email){
  setuserEmail(email)
  setloggedIn(true)
}

function login(log) {
  if (!log){
    return;
  }

  mestoAuth.authorize(log.PasswordInput,log.LoginInput).then((data) => {
    if (data.message === 'Неправильные почта или пароль'){
      console.log(data)
    }else{
      handleLogin(log.LoginInput);
      get()
      localStorage.setItem('jwt', log.LoginInput);
    }
  })
  .catch(err => console.log(err));
}

 

 
function register(reg) {
  mestoAuth.register(reg.PasswordInput,reg.EmailInput, reg.LoginInput).then((res) => {
    if(res){
        navigate('/');

    } else {
      setisInfoToolTip(true)

    }
}).catch(err =>{
  console.log(err)
  setisInfoToolTip(true)
});
}


 React.useEffect(() =>{
  tokenCheck()
 },[])
  return (
    <div className="App">
      <Routes>
      <Route exact path="/reg" element={<Register handleSubmit={register} toLogin={toLogin}/>} />
      <Route exact path="/" element={<Login handleSubmit={login} toReg={toReg}/>} />
        <Route exact path="/main" element={<Main cardSel={setselectedkinoOp} openkino={setIskinoOpiOpen} />} />
        <Route exact path="/mybil" element={<Mybil />} />
      </Routes>
      <KinoOpi cardSetKino={setselectedkino} SetOpenKino={setIskinoOpen}  card={selectedkinoOp} setOpen={setIskinoOpiOpen} open={iskinoOpiOpen}/>
      <FilmOpi card={selectedkino} setOpen={setIskinoOpen} open={iskinoOpen} setKinoOpen={setIskinoOpiOpen}/>
    </div>
  );
}

export default App;
