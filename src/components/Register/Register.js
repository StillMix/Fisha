import React, { useState } from "react";
import "./Register.css";

function Register(props) {
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
    props.toLogin();
  }

  return (
    <div className="viseble">
      <p className="register__title">
        FISH<span className="register__title_span">A</span>
        <br />
        <span className="register__posttitle">ДОБРО ПОЖАЛОВАТЬ!</span>
      </p>
      <p className="register__text">РЕГИСТРАЦИЯ</p>
      <form onSubmit={handleSubmit} className="register__form">
        <input
          value={formValues.LoginInput}
          onChange={handleChange}
          name="LoginInput"
          className="register__form_input"
          placeholder="ЛОГИН"
          id="logins"
          type="login"
        />
        <input
          value={formValues.EmailInput}
          onChange={handleChange}
          name="EmailInput"
          className="register__form_input"
          placeholder="АДРЕС ЭЛЕКТРОННОЙ ПОЧТЫ"
          id="email"
          type="emails"
        />
        <input
          value={formValues.PasswordInput}
          onChange={handleChange}
          name="PasswordInput"
          className="register__form_input"
          placeholder="ПАРОЛЬ"
          id="passwords"
          type="password"
        />

        <button type="submit" className="btn register__form_btn">ЗАРЕГИСТРИРОВАТЬСЯ</button>
      </form>
      <button className="btn register__btn" onClick={handleClick}>ВОЙТИ</button>
      <p className="reg__form_error"></p>
      <p className="agree">
        ИСПОЛЬЗУЯ СЕРВИС FISHA, ВЫ СОГЛАШАЕТЕСЬ С ПРАВИЛАМИ ИСПОЛЬЗОВАНИЯ,
        КОТОРЫЕ ВКЛЮЧАЮТ В СЕБЯ НАСТОЯЩУЮ ПОЛИТИКУ КОНФИДЕНЦИАЛЬНОСТИ. FISHA ©
        2023. ВСЕ ПРАВА ЗАЩИЩЕНЫ
      </p>
    </div>
  );
}

export default Register;
