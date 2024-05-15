import React from "react";
import "./Mybil.css";
import Menu from '../Menu/Menu';
import chebur from '../../images/chebur.png';
import brat from '../../images/brat.png';

function Mybil(props) {
  return (
    <>
    <div className="Mybil">
        <p className="mybil__title">МОИ БИЛЕТЫ</p> 
         {props.card && props.card.map(card => {
          return (
            <div className="card">
               {card.balance === "ЧЕБУРАШКА"? 
                    <img alt="img" src={chebur} />
                :
                <img alt="img" src={brat} />
              }
              <p className="card__title">{card.balance}</p>
            </div>
          )
         })}
         <Menu />
    </div>
    </>
  );
}

export default Mybil;
