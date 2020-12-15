import React from "react";
import "./WatchSection.css";
import WatchInfo from "./WatchInfo";

function WatchSection() {
  return (
    <div className="watchSection">
      <div className="watchSection__banner">
        <WatchInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/71EoGntO5bL._SX679_.jpg"
          Name="Apple Series 3"
          Rate="₹ 22,999/-"
          ButtonInfo="Add to cart"
        />
        <WatchInfo
          Src="https://m.media-amazon.com/images/G/31/mg18/Apple/watch/240_160/WatchSeries3-Cellular-38mm-AluminumSpaceGray-SportBand-Black-34R-SCREEN._CB436747290_.png"
          Name="Apple Watch SE"
          Rate="₹ 31,999/-"
          ButtonInfo="Add to cart"
        />
        <WatchInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/7158cliU8vL._SX679_.jpg"
          Name="Apple Series 6"
          Rate="₹ 41,999/-"
          ButtonInfo="Add to cart"
        />
      </div>
      <div className="watchSection__banner">
        <WatchInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/6113mS%2BxhyL._SX679_.jpg"
          Name="Noise Colorfit Pro"
          Rate="₹ 2,999/-"
          ButtonInfo="Add to cart"
        />
        <WatchInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/61uej9efKYL._SX679_.jpg"
          Name="Samsung Active 2"
          Rate="₹ 16,999/-"
          ButtonInfo="Add to cart"
        />
        <WatchInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/71pYXdg9%2BIL._SY879_.jpg"
          Name="Realme Watch"
          Rate="₹ 3,499/-"
          ButtonInfo="Add to cart"
        />
      </div>
      <div className="watchSection__banner">
        <WatchInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/61CH%2B9X%2BynL._SX679_.jpg"
          Name="Amazfit Bip S"
          Rate="₹ 4,499/-"
          ButtonInfo="Add to cart"
        />
        <WatchInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/71-A%2Bh4pBTL._UX679_.jpg"
          Name="Fossil Gen 5"
          Rate="₹ 20,999/-"
          ButtonInfo="Add to cart"
        />
        <WatchInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/61-%2BzVZL4LL._SX679_.jpg"
          Name="realme Band"
          Rate="₹ 1,499/-"
          ButtonInfo="Add to cart"
        />
      </div>
      <div className="watchSection__banner">
        <WatchInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/719ZywAmvOL._SX679_.jpg"
          Name="Mi Smart Band"
          Rate="₹ 2,299/-"
          ButtonInfo="Add to cart"
        />
        <WatchInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/81MfrKM-h7L._SX679_.jpg"
          Name="HONOR Band 5"
          Rate="₹ 1,999/-"
          ButtonInfo="Add to cart"
        />
        <WatchInfo
          Src="https://images-na.ssl-images-amazon.com/images/I/71ZSpNjEl0L._SX679_.jpg"
          Name="Mi Band 4"
          Rate="₹ 2,099/-"
          ButtonInfo="Add to cart"
        />
      </div>
    </div>
  );
}

export default WatchSection;
