import React from "react";
import { MdDelete } from "react-icons/md";
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, resetCart } from "../../redux/cartReducer";
import { makeRequest } from "../../makeReq";
import { loadStripe } from "@stripe/stripe-js";
import StripeCheckout from 'react-stripe-checkout';


function Cart() {
  const data = useSelector((state) => state.cart.products);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  let totalPrice = 0;
  data.forEach((item) => (totalPrice += item.quantity * item.price));
  const dispatch = useDispatch();
  const stripePromise = loadStripe(
    "pk_test_51NmqvsSDYEVWvpUb1vCxIp74QUbt2mIwvqnC1ufWnZAZq7ZrBMXcebyP87qsr51K2RgTqkm6Rxit3rVcplp3LJ1P0054Xl5yH4"
  );

  const handlePayment = async() => {
    try {
      const stripe = await stripePromise;
      
      const res = await makeRequest.post("/orders",{
        data
      });
      
      await stripe.redirectToCheckout({
        sessionId : res.data.stripeSession.id,
      })
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="cart">
      {totalQuantity ? (
        <>
          <h2>Items in cart</h2>
          {data?.map((item) => (
            <div className="item" key={item.id}>
              <img src={item.img} alt="" />
              <div className="details">
                <h3>{item.title}</h3>
                <p>{item.description.substring(0, 30)}</p>
                <div className="price">{`${item.quantity} * ₹${item.price}`}</div>
              </div>
              <MdDelete
                className="delete-icon"
                onClick={() => dispatch(removeFromCart(item.id))}
              />
            </div>
          ))}
          <div className="total">
            <span>SUB TOTAL</span>
            <span>{totalPrice}</span>
          </div>
          <button onClick={handlePayment}>Proceed to Checkout</button>
          <button
            className="reset"
            onClick={() => {
              dispatch(resetCart());
            }}
          >
            RESET CART
          </button>
          {/* <div className="w-full mt-6 flex items-center justify-center">
                <StripeCheckout
                  stripeKey="pk_test_51NmqvsSDYEVWvpUb1vCxIp74QUbt2mIwvqnC1ufWnZAZq7ZrBMXcebyP87qsr51K2RgTqkm6Rxit3rVcplp3LJ1P0054Xl5yH4"
                  name="Bazar Online Shopping"
                  amount={totalPrice}
                  label="Pay to bazar"
                  description={`Your Payment amount is $${totalPrice}`}
                  token={payment}
                  email={"bhattmohit869@gmail.com"}
                />
              </div> */}
        </>
      ) 
      : (
        <span className="no-item">No items in the cart</span>
      )}
    </div>
  );
}

export default Cart;
