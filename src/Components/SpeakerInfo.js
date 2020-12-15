import { Button } from "@material-ui/core";
import React from "react";
import "./SpeakerInfo.css";

function SpeakerInfo({ Src, Name, Rate, ButtonInfo }) {
  return (
    <div className="speakerInfo">
      <div className="speakerInfo__boxes">
        <div className="speakerInfo__box">
          <img
            className="speakerInfo__boxImage"
            src={Src}
            className="speakerInfo__boxImage"
          />
          <h1 className="speakerInfo__h1">{Name}</h1>
          <h5 className="speakerInfo__h3">{Rate}</h5>
          <Button className="speakerInfo__button">{ButtonInfo}</Button>
        </div>
      </div>
    </div>
  );
}

export default SpeakerInfo;
