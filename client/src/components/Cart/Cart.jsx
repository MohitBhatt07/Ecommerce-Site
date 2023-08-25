import React from "react";
import { MdDelete } from "react-icons/md";
import "./Cart.scss";

const data = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/613KABeTdwL._UY741_.jpg",
    img2: "https://m.media-amazon.com/images/I/51OVMS7p9CL._UY741_.jpg",
    title: "Cotton blend half sleeves T-shirt",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quae quidem dolores nobis porro fugit quo adipisci sint? Exercitationem iure neque libero ex ipsam suscipit iusto. Cupiditate a unde corrupti.",
    isNew: true,
    oldPrice: 1099,
    price: 294,
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/61n4DmCEzvL._UY741_.jpg",
    img2: "https://m.media-amazon.com/images/I/71Z9fNLQ55L._UY741_.jpg",
    title: "Cotton Hooded Cardigan",
    isNew: true,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quae quidem dolores nobis porro fugit quo adipisci sint? Exercitationem iure neque libero ex ipsam suscipit iusto. Cupiditate a unde corrupti.",
    oldPrice: 1899,
    price: 850,
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/41TRg1JUtwL._UY679_.jpg",
    img2: "https://m.media-amazon.com/images/I/51KTx9vKNTL._UY679_.jpg",
    title: "Long Puff Sleeve",
    isNew: false,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quae quidem dolores nobis porro fugit quo adipisci sint? Exercitationem iure neque libero ex ipsam suscipit iusto. Cupiditate a unde corrupti.",
    oldPrice: 1799,
    price: 950,
  },
];
function Cart() {
  return (
    <div className="cart">
      <h2>Items in cart</h2>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h3>{item.title}</h3>
            <p>{item.details.substring(0, 30)}</p>
            <div className="price">1 * ₹{item.price}</div>
          </div>
          <MdDelete className="delete-icon" />
        </div>
      ))}
      <div className="total">
        <span>SUB TOTAL</span>
        <span>₹1000</span>
      </div>
      <button>Proceed to Checkout</button>
      <span className="reset">RESET CART</span>
    </div>
  );
}

export default Cart;
