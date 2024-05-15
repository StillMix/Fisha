import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Main from "./Main/Main";
import KinoOpi from "./KinoOpi/KinoOpi";
import FilmOpi from "./FilmOpi/FilmOpi";
import Mybil from "./Mybil/Mybil";
import Login from "./Login/Login";
import {mestoAuth} from '../utils/Auth';
import api from '../utils/Api.js';
import Register from "./Register/Register.js";
import Profile from "./Profile/Profile.js";

function App() {
  const [iskinoOpiOpen, setIskinoOpiOpen] = useState(false);
  const [selectedkinoOp, setselectedkinoOp] = useState(null);
  const [iskinoOpen, setIskinoOpen] = useState(false);
  const [selectedkino, setselectedkino] = useState(null);

  const [cards, setCards] = useState([])
  const navigate = useNavigate();
  const location = useLocation();
  function toLogin() {
    navigate('/')
  }
  function toReg() {
    navigate('/reg')
  }


  
  function handleCardLike(card) {
    console.log(card)
    api.changeLikeCardStatus(card._id).then((data) => {
        setCards(data.data);
    }).catch((err) => {
      console.log(err)
  });
  }
  
  
  
  function addCard(card){
    if (!card) {
      return;
    }else{
    api.addCard(card).then((data)=>{
      setCards([data.data, ...cards]);
      const len = cards.length - 1
      handleCardLike(cards[len])
    })
    .catch((err) => {
        console.log(err)
    });
  }
  }
  
  function backUser(){
    api.backUser().then((data)=>{
      localStorage.removeItem('jwt');
      console.log(data)
    })
    .catch((err) => {
        console.log(err)
    });
  
  }
  

 function get() {
  api.getUserInfo().then((user) => {
    if(user){
      api.getCards().then((data) => {
        if(data){
        setCards(data.data)
        navigate('/main')
        }
    }).catch((err) => {
        console.log(err)
    })
    }
  }).catch((err) => {
    console.log(err)
});
}
 
 function login(log) {
   if (!log){
     return;
   }
 
   mestoAuth.authorize(log.PasswordInput, log.LoginInput).then((data) => {
     if (data.message === 'Неправильные почта или пароль'){
       console.log(data)
     }else{
       get()
       localStorage.setItem('jwt', log.LoginInput);
     }
   })
   .catch(err => console.log(err));
 }
 
 
 
 function register(reg) {
   mestoAuth.register(reg.PasswordInput,reg.EmailInput, reg.LoginInput).then((res) => {
     if(res){
      navigate('/')
 
     } else {

 
     }
 }).catch(err =>{
   console.log(err)

 });
 }
 

 
 useEffect(() => {
  const handleNavigation = () => {
    if (localStorage.getItem('jwt')) {
      mestoAuth.getContent().then((res) => {
        if (res.message === 'Необходима авторизация') {
          console.log(res);
          navigate('/')
        } else {
          api.getCards().then((data) => {
            if (data) {
              setCards(data.data);
              if (location.pathname === '/') {
                navigate('/main');
              }
            }
          }).catch((err) => {
            console.log(err);
          });
        }
      }).catch((err) => console.log(err));
    }
  };

  handleNavigation();
}, [location, navigate]);



  return (
    <div className="App">
      <Routes>
      <Route exact path="/reg" element={<Register handleSubmit={register} toLogin={toLogin}/>} />
      <Route exact path="/" element={<Login handleSubmit={login} toReg={toReg}/>} />
        <Route exact path="/main" element={<Main cardSel={setselectedkinoOp} openkino={setIskinoOpiOpen} />} />
        <Route exact path="/mybil" element={<Mybil card={cards}/>} />
        <Route exact path="/profile" element={<Profile back={backUser} navigate={navigate}/>} />
      </Routes>
      <KinoOpi cardSetKino={setselectedkino} SetOpenKino={setIskinoOpen}  card={selectedkinoOp} setOpen={setIskinoOpiOpen} open={iskinoOpiOpen}/>
      <FilmOpi card={selectedkino} dopCard={addCard} setOpen={setIskinoOpen} open={iskinoOpen} setKinoOpen={setIskinoOpiOpen}/>
    </div>
  );
}

export default App;
