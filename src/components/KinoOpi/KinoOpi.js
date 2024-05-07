import React from "react";
import "./KinoOpi.css";
import Arrow from "../../images/arrow.svg";

function KinoOpi(props) {
  function handleClick() {
    props.setOpen(false);
}
  return (
    <div className={` ${props.open ? 'kinoOpi' : 'disabled'}`}>
      <img className="kinoOpi__arrow" onClick={handleClick} src={Arrow} />
      {props.card && (
        <>
          <img className="kinoOpi__img" src={props.card.imgSrc} />
          <div className="kinoOpi__textcont">
            <p className="kinoOpi__title">{props.card.name}</p>
            <div className="kinoOpi__opi">
              <p className="kinoOpi__subtitle">{props.card.adres}</p>
              <p className="kinoOpi__otr">Открыто до {props.card.otr}</p>
            </div>
            <p className="kinoOpi__bil">Билеты от {props.card.ot}₽</p>
            <div className="kinoOpi__container">
              <p className="kinoOpi__container_title">О месте</p>
              <p className="kinoOpi__container_text">
                {props.card.name} - это ваш уютный кинематографический островок,
                где каждая посадка становится путешествием в мир волшебства и
                искусства кино. Наши кинозалы, вдохновленные современным дизайном
                и комфортом, создают идеальное окружение для наслаждения фильмами в
                высоком разрешении и звуке, окутывающем вас изысканным атмосферным звучанием.
              </p>
            </div>
            <p className="kinoOpi__predsob">ПРЕДСТОЯЩИЕ СОБЫТИЯ</p>
          </div>
        </>
      )}
    </div>
  );
}

export default KinoOpi;
