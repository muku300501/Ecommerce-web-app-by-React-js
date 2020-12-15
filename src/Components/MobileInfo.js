import { Button } from "@material-ui/core";
import React from "react";
import "./MobileInfo.css";

function MobileInfo({ Src, Name, Rate, ButtonInfo }) {
  return (
    <div className="mobileInfo">
      <div className="mobileInfo__boxes">
        <div className="mobileInfo__box">
          <img
            className="mobileInfo__boxImage"
            src={Src}
            className="mobileInfo__boxImage"
          />
          <h1 className="mobileInfo__h1">{Name}</h1>
          <h5 className="mobileInfo__h3">{Rate}</h5>
          <Button className="mobileInfo__button">{ButtonInfo}</Button>
        </div>
      </div>
    </div>
  );
}

export default MobileInfo;
