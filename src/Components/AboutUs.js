import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="aboutUs">
      <div className="aboutUs__box">
        <div className="aboutUs__info">
          <h1 className="aboutUs__h1">Gada Electro Inc.</h1>
          <p className="aboutUs__para">Owner: Mukund Chamariya</p>
          <p className="aboutUs__para">Since: 1988</p>
          <p className="aboutUs__para">
            Address: Power Gali, Goregaon East ,Opp Gokuldham Society,
            Mumbai-400060
          </p>
          <Link to="/">
            <Button className="aboutUs__button">Welcome</Button>
          </Link>
        </div>
        <div>
          <img className="aboutUs__image" src="../../Images/svg-6.svg" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
