import React from "react";
import "./KinoOpi.css";
import Arrow from "../../images/arrow.svg";
import chebur from '../../images/chebur.png';
import brat from '../../images/brat.png';
import CardKino from "../CardKino/CardKino";


const initialCards = [
  {
    name: "ЧЕБУРАШКА",
    link: chebur,
    dl: '1:53',
    stoim: '200',
    about: 'Иногда, чтобы вернуть солнце и улыбки в мир взрослых, нужен один маленький ушастый герой. Мохнатого непоседливого зверька из далекой апельсиновой страны ждут удивительные приключения в тихом приморском городке, где ему предстоит найти себе имя, друзей и дом. Помогать — и мешать! — ему в этом будут нелюдимый старик-садовник, странная тетя-модница и ее капризная внучка, мальчик, который никак не начнет говорить, и его мама, которой приходится несладко, хотя она и варит самый вкусный на свете шоколад. И многие-многие другие, в чью жизнь вместе с ароматом апельсинов вот-вот ворвутся волшебство и приключения.',
    key: 0
  },
  {
    name: "БРАТ",
    link: brat,
    dl: '1:20',
    stoim: '300',
    about: 'Демобилизовавшись, Данила Багров вернулся в родной городок. Но скучная жизнь российской провинции не устраивала его, и он решился податься в Петербург, где, по слухам, уже несколько лет процветает его старший брат. Данила нашел брата. Но все оказалось не так просто — брат работает наемным убийцей. ',
    key: 1,
  },
];
function KinoOpi(props) {
  function handleClick() {
    props.setOpen(false);
}
  return (
    <div className={` ${props.open ? 'kinoOpi' : 'disabled'}`}>
      <img className="kinoOpi__arrow" alt="img"  onClick={handleClick} src={Arrow} />
      {props.card && (
        <>
          <img className="kinoOpi__img" alt="img"  src={props.card.imgSrc} />
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
            <div className="kinoOpi__cards">
      {initialCards.map((card) => (
            <CardKino key={card.key}  setKinoOpen={props.setOpen} setOpen={props.SetOpenKino} setCard={props.cardSetKino} adres={props.card.adres} kinot={props.card.name} name={card.name} link={card.link} about={card.about} dl={card.dl} stoim={card.stoim}/>
          ))}
      </div>
          </div>
        </>
      )}
    </div>
  );
}

export default KinoOpi;
