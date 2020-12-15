import React from "react";
import SpeakerInfo from "./SpeakerInfo";
import "./SpeakerSection.css";

function SpeakerSection() {
  return (
    <div className="speakerSection">
      <div className="speakerSection__banner">
        <SpeakerInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/81grtcmxsyL._SX522_.jpg"
          Name="Zebronics Speakers"
          Rate="₹ 699/-"
          ButtonInfo="Add to cart"
        />
        <SpeakerInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/61fAoBkYQ1L._SX425_.jpg"
          Name="Echo Dot (3rd Gen)"
          Rate="₹ 3,299/-"
          ButtonInfo="Add to cart"
        />
        <SpeakerInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/81DRhqE04BL._SX679_.jpg"
          Name="Jbl Flip 3"
          Rate="₹ 4,599/-"
          ButtonInfo="Add to cart"
        />
      </div>
      <div className="speakerSection__banner">
        <SpeakerInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/718DqdKu9tL._SX679_.jpg"
          Name="boAt Stone 1000"
          Rate="₹ 2,699/-"
          ButtonInfo="Add to cart"
        />
        <SpeakerInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/711O-NKeBML._SX522_.jpg"
          Name="JBL Boom Box"
          Rate="₹ 21,999/-"
          ButtonInfo="Add to cart"
        />
        <SpeakerInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/71URz1O3-yL._SX679_.jpg"
          Name="JBL Clip 3"
          Rate="₹ 2,499/-"
          ButtonInfo="Add to cart"
        />
      </div>
      <div className="speakerSection__banner">
        <SpeakerInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/71XRDYZChLL._SX679_.jpg"
          Name="JBL Pulse 3"
          Rate="₹ 11,499/-"
          ButtonInfo="Add to cart"
        />
        <SpeakerInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/71lDpW597wL._SX679_.jpg"
          Name="Sony MHC-V21D"
          Rate="₹ 15,999/-"
          ButtonInfo="Add to cart"
        />
        <SpeakerInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/91ytEI3VWWL._SX679_.jpg"
          Name="Marshall Kilburn II"
          Rate="₹ 23,990/-"
          ButtonInfo="Add to cart"
        />
      </div>
      <div className="speakerSection__banner">
        <SpeakerInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/51Tn3qxqr3L._SX679_.jpg"
          Name="Marshall Acton II"
          Rate="₹ 17,999/-"
          ButtonInfo="Add to cart"
        />
        <SpeakerInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/81lb2PmyCsL._SX679_.jpg"
          Name="Bose Speakers"
          Rate="₹ 19,999/-"
          ButtonInfo="Add to cart"
        />
        <SpeakerInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/91-wTcoEZxL._SX679_.jpg"
          Name="Sony SRS-XB43"
          Rate="₹ 14,999/-"
          ButtonInfo="Add to cart"
        />
      </div>
      <div className="speakerSection__banner">
        <SpeakerInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/71djbDBVznL._SX522_.jpg"
          Name="Sony MHC-V43D"
          Rate="₹ 29,899/-"
          ButtonInfo="Add to cart"
        />
        <SpeakerInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/81AyI9V2nEL._SX522_.jpg"
          Name="Philips TAX4105"
          Rate="₹ 13,999/-"
          ButtonInfo="Add to cart"
        />
        <SpeakerInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/71gRTcUnZxL._SX522_.jpg"
          Name="Philips Speakers"
          Rate="₹ 10,999/-"
          ButtonInfo="Add to cart"
        />
      </div>
    </div>
  );
}

export default SpeakerSection;
