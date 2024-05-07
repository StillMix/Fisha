import React from "react";
import "./MainCardKinot.css";

function MainCardKinot(props) {
    const currentDateTime = new Date(new Date().getTime() + 3 * 60 * 60 * 1000);
    const currentTime = currentDateTime.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
  
    const otr = new Date(`01/01/2024 ${props.otr}`);
    const zakr = new Date(`01/01/2024 ${props.zakr}`);

    let statusText;
    let statusColor;
  
    if (currentTime > props.otr && currentTime < props.zakr) {
      statusText = `Открыто до ${props.zakr}`;
      statusColor = 'black';
    } else {
      statusText = `Закрыто до ${props.otr}`;
      statusColor = 'red';
    }
    function handleClick() {
      props.open(true);
      props.card(props);
  }
  
  return (
    <div className="mainCardKinot" onClick={handleClick}>
      <img className="mainCardKinot__img" src={props.imgSrc} />
      <div className="mainCardKinot__containerOp">
      <div className="mainCardKinot__container">
        <p className="mainCardKinot__title">{props.name}</p>
        <p className="mainCardKinot__subtitle">{props.adres}</p>
      </div>
      <div className="mainCardKinot__container">
      <p className="mainCardKinot__bil">Билеты от {props.ot}₽</p>
      <p className="mainCardKinot__otzak" style={{ color: statusColor }}>{statusText}</p>
</div> 
      </div>
    </div>
  );
}

export default MainCardKinot;
