import React from "react";
import "./option.css";
import Exit from "./exit.png";
import User from "./user.png";
export function Option({ img, name, logOut }) {
  return (
    <div className="option" id="option">
      <div className="header-option">
        <div className="hdop-son">
          <div className="header-left">
            <img src={img} className="user-Img-header" alt="header-img"></img>
          </div>
          <div className="header-right">
            <div>{name}</div>
            <div className="small-letter">Administra tu cuenta de youtube</div>
          </div>
        </div>
      </div>
      <div className="body-option">
        <div className="item-header">
          <div className="item-header-contents">
            <div className="img-left">
              <img
                src={User}
                width="22px"
                height="22px"
                alt="user-img-header"
                className="img-header-user"
              ></img>
            </div>
            <div className="info-item">Tu Canal</div>
          </div>
        </div>
        <div className="item-header" onClick={logOut}>
          <div className="item-header-contents">
            <div className="img-left">
              <img src={Exit} width="24px" height="24px" alt="exit-img"></img>
            </div>
            <div className="info-item">Salir</div>
          </div>
        </div>
      </div>
    </div>
  );
}
