import React from "react";
import MobileInfo from "./MobileInfo";
import "./Mobilesection.css";

function Mobilesection() {
  return (
    <div className="mobileSection">
      <div className="mobileSection__banner">
        <MobileInfo
          Src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAmrBCpT5Cc-FsjT3S6klGqJeojmFMPJJd9Q&usqp=CAU"
          Name="Iphone 11 pro max"
          Rate="₹ 95,500/-"
          ButtonInfo="Add to cart"
        />
        <MobileInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/71i2XhHU3pL._SX679_.jpg"
          Name="Apple iPhone 11"
          Rate="₹ 49,999/-"
          ButtonInfo="Add to cart"
        />
        <MobileInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/71MHTD3uL4L._SX679_.jpg"
          Name="iPhone 12 Pro Max"
          Rate="₹ 120,999/-"
          ButtonInfo="Add to cart"
        />
      </div>
      <div className="mobileSection__banner">
        <MobileInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/61YSMhOd5EL._SX679_.jpg"
          Name="OnePlus 8 Pro"
          Rate="₹ 51,999/-"
          ButtonInfo="Add to cart"
        />
        <MobileInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/61FRLa8IFTL._SX679_.jpg"
          Name="Oneplus 7T PRO"
          Rate="₹ 41,999/-"
          ButtonInfo="Add to cart"
        />
        <MobileInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/51EfDWKl24L._SY679_.jpg"
          Name=" OnePlus 6T"
          Rate="₹ 25,999/-"
          ButtonInfo="Add to cart"
        />
      </div>
      <div className="mobileSection__banner">
        <MobileInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/619jtWsN0cL._SY679_.jpg"
          Name="Samsung Galaxy S10"
          Rate="₹ 35,999/-"
          ButtonInfo="Add to cart"
        />
        <MobileInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/71Wh8ZPcGBL._SY679_.jpg"
          Name="Samsung Galaxy A71"
          Rate="₹ 27,999/-"
          ButtonInfo="Add to cart"
        />
        <MobileInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/713AhSUtbHL._SY679_.jpg"
          Name="Samsung Galaxy M51"
          Rate="₹ 22,999/-"
          ButtonInfo="Add to cart"
        />
      </div>
      <div className="mobileSection__banner">
        <MobileInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/61DlqYmSLOL._SY679_.jpg"
          Name="Vivo V19"
          Rate="₹ 21,999/-"
          ButtonInfo="Add to cart"
        />
        <MobileInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/71tBQRJKdWL._SX679_.jpg"
          Name="Vivo X50 Pro"
          Rate="₹ 44,999/-"
          ButtonInfo="Add to cart"
        />
        <MobileInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/71iRjnARnSL._SY679_.jpg"
          Name="Vivo V17 Pro"
          Rate="₹ 26,499/-"
          ButtonInfo="Add to cart"
        />
      </div>
      <div className="mobileSection__banner">
        <MobileInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/81dBes518cL._SX679_.jpg"
          Name="OPPO Reno4 Pro"
          Rate="₹ 33,499/-"
          ButtonInfo="Add to cart"
        />
        <MobileInfo
          Src="https://rukminim1.flixcart.com/image/416/416/kesv0y80/mobile/b/q/f/oppo-f17-cph2095-original-imafvepcfqdutgg3.jpeg?q=70"
          Name="OPPO F17"
          Rate="₹ 15,990/-"
          ButtonInfo="Add to cart"
        />
        <MobileInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/91-2d0XeliL._SX679_.jpg"
          Name="OPPO Find X2"
          Rate="₹ 62,990/-"
          ButtonInfo="Add to cart"
        />
      </div>
    </div>
  );
}

export default Mobilesection;
