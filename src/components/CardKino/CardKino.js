import React from "react";
import "./CardKino.css";



function CardKino(props) {
    function handleClick() {
        props.setOpen(true);
        props.setKinoOpen(false);
        props.setCard(props);
    }
  return (
    <div className="CardKino" onClick={handleClick}>
      <img className="CardKino__img" alt="img" src={props.link} />
      <div className="CardKino__containerOp">
      <div className="CardKino__container">
        <p className="CardKino__title">{props.name}</p>
        <p className="CardKino__subtitle">{props.adres}</p>
      </div>
      <div className="CardKino__container">
      <p className="CardKino__bil">Билеты от {props.stoim}₽</p>
      <p className="CardKino__title">Длительность: {props.dl}</p>
</div> 
      </div>
    </div>
  );
  
}

export default CardKino;
