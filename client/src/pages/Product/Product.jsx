import React, { useState } from "react";
import "./Product.scss";
import { BsCartPlus } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { FaBalanceScale } from "react-icons/fa";
const Product = () => {
  const images = [
    "https://m.media-amazon.com/images/I/613KABeTdwL._UY741_.jpg",
    "https://m.media-amazon.com/images/I/51OVMS7p9CL._UY741_.jpg",
  ];
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img className ={selectedImg === 0 && 'activeImg'} src={images[0]} alt="" onClick={() => setSelectedImg(0)} />
          <img className ={selectedImg === 1 && 'activeImg'} src={images[1]} alt="" onClick={() => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h2>Cotton Blend half Tshirt</h2>
        <span className="price">₹ 900</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quas
          neque repellat ab ex similique, adipisci iusto ipsam rerum tempora
          molestiae nam, corporis sit totam nobis officiis ut? Ducimus,
          corrupti?
        </p>
        <div className="quantity">
          <button
            onClick={() =>
              setQuantity((prev) => (quantity === 1 ? 1 : prev - 1))
            }
          >
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <BsCartPlus className="addIcon" size={24} />
          Add to cart ({quantity })
        </button>
        <div className="links">
          <div className="item">
            <BsHeart size={24}/>
            Add to favourites
          </div>
          <div className="item">
            <FaBalanceScale size={24}/>
            Add to  Compare
          </div>
          
        </div>
       
        <div className="info">
          <span>Vendor : Leotude</span>
          <span>Product type : tshirt</span>
          <hr/>
        </div>
        
        <div className="info">
          <span>Description</span>
          
          <span> Additional Information</span>
          
          <span> FAQs</span>
          <hr/>
        </div>
      </div>
    </div>
  );
};

export default Product;
