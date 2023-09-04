import React, { useState } from "react";
import "./Product.scss";
import { BsCartPlus } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { FaBalanceScale } from "react-icons/fa";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
const Product = () => {
  const dispatch = useDispatch();
  const id = useParams().id;
  const { data } = useFetch(`/products/${id}?populate=*`);
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img
            className={selectedImg === "img" && "activeImg"}
            src={
              process.env.REACT_APP_UPLOAD_URL +
              data?.attributes?.img.data.attributes?.url
            }
            alt=""
            onClick={() => setSelectedImg("img")}
          />
          <img
            className={selectedImg === "img2" && "activeImg"}
            src={
              process.env.REACT_APP_UPLOAD_URL +
              data?.attributes?.img2.data.attributes?.url
            }
            alt=""
            onClick={() => setSelectedImg("img2")}
          />
        </div>
        <div className="mainImg">
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              data?.attributes[selectedImg]?.data?.attributes?.url
            }
            alt=""
          />
        </div>
      </div>
      <div className="right">
        <h2>{data?.attributes?.title}</h2>
        <span className="price">₹ {data?.attributes?.price}</span>
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
        <button
          className="add"
          onClick={() => {
            dispatch(
              addToCart({
                id: data.id,
                quantity: quantity,
                title: data.attributes.title,
                price: data.attributes.price,
                description: data.attributes.description,
                img:process.env.REACT_APP_UPLOAD_URL + data.attributes.img.data.attributes.url,
              })
            );
          }}
        >
          <BsCartPlus className="addIcon" size={24} />
          Add to cart ({quantity})
        </button>
        <div className="links">
          <div className="item">
            <BsHeart size={24} />
            Add to favourites
          </div>
          <div className="item">
            <FaBalanceScale size={24} />
            Add to Compare
          </div>
        </div>

        <div className="info">
          <span>Vendor : Leotude</span>
          <span>
            Product type :{" "}
            {data?.attributes?.sub_categories?.data[0].attributes?.title}
          </span>
          <hr />
        </div>

        <div className="info">
          <span>Description</span>

          <span> Additional Information</span>

          <span> FAQs</span>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Product;
