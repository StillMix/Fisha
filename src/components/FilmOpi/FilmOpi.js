import React from "react";
import "./FilmOpi.css";
import Arrow from "../../images/arrow.svg";


function FilmOpi(props) {
  function handleClick() {
    props.setOpen(false);
    props.setKinoOpen(true);
}
  return (
    <div className={` ${props.open ? 'FilmOpi' : 'disabled'}`}>
      <img className="FilmOpi__arrow" onClick={handleClick} src={Arrow} />
      {props.card && (
        <>
          <img className="FilmOpi__img" src={props.card.link} />
          <div className="FilmOpi__textcont">
            <p className="FilmOpi__title">{props.card.name}</p>
            <p className="FilmOpi__subtitle">ДЛИТЕЛЬНОСТЬ: {props.card.dl}</p>
            <p className="FilmOpi__bil">{props.card.stoim}₽</p>
            <div className="FilmOpi__containers">
                <p className="FilmOpi__kinot">{props.card.kinot}</p>
                <p className="FilmOpi__adres">{props.card.adres}</p>
            </div>
            <button className="FilmOpi__btn">КУПИТЬ БИЛЕТ</button>
            <div className="FilmOpi__container">
              <p className="FilmOpi__container_title">О фильме</p>
              <p className="FilmOpi__container_text">
                {props.card.about}
              </p>
            </div>

          </div>
        </>
      )}
    </div>
  );
}

export default FilmOpi;
