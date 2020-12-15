import React from "react";
import Home from "./Home";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="homePage">
      <div className="homePage__banner">
        <Home
          Id="mobile"
          Src="../../Images/svg-3.svg"
          Title="Mobile Section"
          Heading="All Andriod and Apple Mobiles are available in our store"
          ButtonDescription="Visit"
        />
        <Home
          Id="headset"
          Src="../../Images/svg-2.svg"
          Title="Headsets Section"
          Heading="All Types of headsets are available in our store"
          ButtonDescription="Visit"
        />
      </div>
      <div className="homePage__banner">
        <Home
          Id="watch"
          Src="../../Images/svg-4.svg"
          Title="Watches Section"
          Heading="All Types of watches are available in our store"
          ButtonDescription="Visit"
        />
        <Home
          Id="speaker"
          Src="../../Images/svg-5.svg"
          Title="Speakers Section"
          Heading="All Types of speakers are available in our store"
          ButtonDescription="Visit"
        />
      </div>
    </div>
  );
}

export default HomePage;
