import { Button } from "@material-ui/core";
import React from "react";
import "./WatchInfo.css";

function WatchInfo({ Src, Name, Rate, ButtonInfo }) {
  return (
    <div className="watchInfo">
      <div className="watchInfo__boxes">
        <div className="watchInfo__box">
          <img
            className="watchInfo__boxImage"
            src={Src}
            className="watchInfo__boxImage"
          />
          <h1 className="watchInfo__h1">{Name}</h1>
          <h5 className="watchInfo__h3">{Rate}</h5>
          <Button className="watchInfo__button">{ButtonInfo}</Button>
        </div>
      </div>
    </div>
  );
}

export default WatchInfo;
