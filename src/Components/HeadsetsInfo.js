import { Button } from "@material-ui/core";
import React from "react";
import "./HeadsetsInfo.css";

function HeadsetsInfo({ Src, Name, Rate, ButtonInfo }) {
  return (
    <div className="headsetsInfo">
      <div className="headsetsInfo__boxes">
        <div className="headsetsInfo__box">
          <img
            className="headsetsInfo__boxImage"
            src={Src}
            className="headsetsInfo__boxImage"
          />
          <h1 className="headsetsInfo__h1">{Name}</h1>
          <h5 className="headsetsInfo__h3">{Rate}</h5>
          <Button className="headsetsInfo__button">{ButtonInfo}</Button>
        </div>
      </div>
    </div>
  );
}

export default HeadsetsInfo;
