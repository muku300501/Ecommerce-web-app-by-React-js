import React from "react";
import { Button } from "@material-ui/core";
import "./Home.css";
import { Link } from "react-router-dom";

function Home({ Title, Heading, ButtonDescription, Src, Id }) {
  return (
    <div className="home">
      <div className="home__boxes">
        <div className="home__box">
          <img src={Src} className="home__boxImage" />
          <h1 className="home__h1">{Title}</h1>
          <h5 className="home__h3">{Heading}</h5>
          <Link className="home__link" to={`/${Id}`}>
            <Button className="home__button">{ButtonDescription}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
