import React, { useState } from "react";
import "./Login.css";

function Login(props) {
  const [formValues, setFormValues] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.handleSubmit(formValues);
  }

  function handleClick() {
    props.toReg();
  }

  return (
    <div className="viseble">
      <p className="login__title">
        FISH<span className="login__title_span">A</span>
        <br />
        <span className="login__posttitle">С ВОЗРАЩЕНИЕМ!</span>
      </p>
      <p className="login__text">ВХОД</p>
      <form onSubmit={handleSubmit} name="sign-in" className="login__form">
        <input
          value={formValues.LoginInput}
          onChange={handleChange}
          name="LoginInput"
          className="login__form_input"
          placeholder="ЛОГИН"
          id="login"
          type="login"
        />
        <input
          value={formValues.PasswordInput}
          onChange={handleChange}
          name="PasswordInput"
          className="login__form_input"
          placeholder="ПАРОЛЬ"
          id="password"
          type="password"
        />
        <button type="submit" className="btn login__form_btn">ВОЙТИ</button>
      </form>
      <button className="btn login__btn" onClick={handleClick}>РЕГИСТРАЦИЯ</button>
      <p className="login__form_error"></p>
      <p className="agree">
        ИСПОЛЬЗУЯ СЕРВИС FISHA, ВЫ СОГЛАШАЕТЕСЬ С ПРАВИЛАМИ ИСПОЛЬЗОВАНИЯ,
        КОТОРЫЕ ВКЛЮЧАЮТ В СЕБЯ НАСТОЯЩУЮ ПОЛИТИКУ КОНФИДЕНЦИАЛЬНОСТИ. FISHA ©
        2023. ВСЕ ПРАВА ЗАЩИЩЕНЫ
      </p>
    </div>
  );
}

export default Login;
