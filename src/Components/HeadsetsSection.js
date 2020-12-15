import React from "react";
import HeadsetsInfo from "./HeadsetsInfo";
import "./HeadsetsSection.css";

function HeadsetsSection() {
  return (
    <div className="headsetsSection">
      <div className="headsetsSection__banner">
        <HeadsetsInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/61ihz46SLOL._SX679_.jpg"
          Name="boAt Rockerz 450"
          Rate="₹ 1,199/-"
          ButtonInfo="Add to cart"
        />
        <HeadsetsInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/61YvHa6o94L._SX679_.jpg"
          Name="boAt Rockerz 510"
          Rate="₹ 1,499/-"
          ButtonInfo="Add to cart"
        />
        <HeadsetsInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/51v0UzD0CHL._SX522_.jpg"
          Name="pTron Headphones"
          Rate="₹ 1,299/-"
          ButtonInfo="Add to cart"
        />
      </div>
      <div className="headsetsSection__banner">
        <HeadsetsInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/71SJuaMyLDL._SX679_.jpg"
          Name="Leaf headphones"
          Rate="₹ 999/-"
          ButtonInfo="Add to cart"
        />
        <HeadsetsInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/71lczMQC1bL._SY450_.jpg"
          Name="Boltt Headphones"
          Rate="₹ 1,999/-"
          ButtonInfo="Add to cart"
        />
        <HeadsetsInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/71BRC2Sdc1L._SX679_.jpg"
          Name="Mpow Headphones"
          Rate="₹ 7,999/-"
          ButtonInfo="Add to cart"
        />
      </div>
      <div className="headsetsSection__banner">
        <HeadsetsInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/71wslpNyYpL._SX679_.jpg"
          Name="Jbl headphones"
          Rate="₹ 3,999/-"
          ButtonInfo="Add to cart"
        />
        <HeadsetsInfo
          Src="https://m.media-amazon.com/images/I/61VlCNlUkFL._AC_UY218_.jpg"
          Name="boAt Airdopes 171 "
          Rate="₹ 1,599/-"
          ButtonInfo="Add to cart"
        />
        <HeadsetsInfo
          Src="https://m.media-amazon.com/images/I/71nrZHQMZ7L._AC_UY218_.jpg"
          Name="Samsung Buds+"
          Rate="₹ 7,999/-"
          ButtonInfo="Add to cart"
        />
      </div>
      <div className="headsetsSection__banner">
        <HeadsetsInfo
          Src="https://m.media-amazon.com/images/I/715yjjD6X1L._AC_UY218_.jpg"
          Name="Samsung Buds Live"
          Rate="₹ 11,499/-"
          ButtonInfo="Add to cart"
        />
        <HeadsetsInfo
          Src="https://m.media-amazon.com/images/I/61lhXtVMxOL._AC_UY218_.jpg"
          Name="Sony WF-1000XM3"
          Rate="₹ 12,999/-"
          ButtonInfo="Add to cart"
        />
        <HeadsetsInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/71WIwMnP3hL._SX679_.jpg"
          Name="Sony WF-XB700"
          Rate="₹ 6,499/-"
          ButtonInfo="Add to cart"
        />
      </div>
      <div className="headsetsSection__banner">
        <HeadsetsInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/71NTi82uBEL._SX679_.jpg"
          Name="Apple AirPods"
          Rate="₹ 11,999/-"
          ButtonInfo="Add to cart"
        />
        <HeadsetsInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/61U4ZnmUl2L._SX679_.jpg"
          Name="boAt Airdopes 281"
          Rate="₹ 1,999/-"
          ButtonInfo="Add to cart"
        />
        <HeadsetsInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL._SX679_.jpg"
          Name="Apple AirPods Pro"
          Rate="₹ 19,999/-"
          ButtonInfo="Add to cart"
        />
      </div>
    </div>
  );
}

export default HeadsetsSection;
