import React from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";
import kinoNoActive from "../../images/kinotBlack.svg";
import kinoActive from "../../images/kinotBlue.svg";
import mybilNoActive from "../../images/mybilBlack.svg";
import mybilActive from "../../images/mybilBlue.svg";
import profileNoActive from "../../images/profileBlack.svg";
import profileActive from "../../images/profileBlue.svg";

function Menu() {
  return (
    <div className="menu">
      <nav className="menu__links">
        <NavLink to="/main" className="NavLinkMenu__link">
          <img
            src={kinoNoActive}
            className="NavLinkMenu_link_img NavLinkMenu_link_img_inactive"
            alt="Main Logo"
          />
          <img
            src={kinoActive}
            className="NavLinkMenu_link_img NavLinkMenu_link_img_active"
            alt="Main Logo Active"
          />
          Кинотеатры
        </NavLink>
        <NavLink to="/mybil" className="NavLinkMenu__link">
          <img
            src={mybilNoActive}
            className="NavLinkMenu_link_img NavLinkMenu_link_img_inactive"
            alt="Main Logo"
          />
          <img
            src={mybilActive}
            className="NavLinkMenu_link_img NavLinkMenu_link_img_active"
            alt="Main Logo Active"
          />
          Мои билеты
        </NavLink>
        <NavLink to="/profile" className="NavLinkMenu__link">
          <img
            src={profileNoActive}
            className="NavLinkMenu_link_img NavLinkMenu_link_img_inactive"
            alt="Main Logo"
          />
          <img
            src={profileActive}
            className="NavLinkMenu_link_img NavLinkMenu_link_img_active"
            alt="Main Logo Active"
          />
          Профиль
        </NavLink>
      </nav>
    </div>
  );
}

export default Menu;
