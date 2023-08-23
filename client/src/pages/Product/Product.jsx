import React, { useState } from "react";
import "./Product.scss";

const Product = () => {
  const images = [
    "https://m.media-amazon.com/images/I/613KABeTdwL._UY741_.jpg",
    "https://m.media-amazon.com/images/I/51OVMS7p9CL._UY741_.jpg",
  ];
  const [selectedImg, setSelectedImg] = useState(0);
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={() => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={() => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Product;
