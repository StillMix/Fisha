import React from "react";
import "./Main.css";
import Geo from "../../images/geo.svg";
import kinotlife from "../../images/kinot/kinotkinolife.png";
import kinotstar from "../../images/kinot/kinotkinostar.png";
import MainCardKinot from "../MainCardKinot/MainCardKinot";
import Menu from '../Menu/Menu';

const initialCards = [
  {
    name: "ЛАЙФКИНО",
    ot: "50",
    otr: "23:00",
    zakr: "10:00",
    link: kinotlife,
    adres: "Курск, Курская Область Улица Солнечная, 45",

    key: 0,
  },
  {
    name: "КИНОТЕАРТ “ЗВЕЗДА”",
    ot: "100",
    otr: "10:00",
    zakr: "23:00",
    link: kinotstar,
    adres: "Курск, Курская Область Проспект Цветущий, 21",
    key: 1,
  },
];

function Main(props) {
  return (
    <div className="main">
      <div className="main__texts">
        <p className="main__textkino">КИНОТЕАТРЫ</p>
        <p className="main__textkur">КУРСК</p>
        <img src={Geo} alt="img"  className="main__textgeo" />
      </div>
      <div className="main__cards">
      {initialCards.map((card) => (
            <MainCardKinot open={props.openkino} card={props.cardSel} key={card.key} name={card.name} imgSrc={card.link} ot={card.ot}  otr={card.otr} zakr={card.zakr} adres={card.adres}/>
          ))}
      </div>
      <Menu />
    </div>
  );
}

export default Main;
