import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { HiSearch } from "react-icons/hi";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

function NavBar() {
  const [openCart,setOpenCart] =useState(false);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  return (
    <nav className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/india.png" alt="" height={"15px"} width={"20px"} />
            <IoIosArrowDown />
          </div>
          <div className="item">
            <span>RS</span>
            <IoIosArrowDown />
          </div>
          <div className="item">
            <Link  className='link' to={"/products/2"}>Men</Link>
          </div>
          <div className="item">
            <Link className='link'  to={"/products/1"}>Women</Link>
          </div>
          <div className="item">
            <Link className='link'  to={"/products/3"}>Children</Link>
          </div>
          <Link to={"/"} className="link">Accessories</Link>
        </div>
        <div className="center">
          <Link className='link'  to={"/"}>Shop IT</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link  className='link' to={"/"}>HomePage</Link>
          </div>
          <div className="item">
            <Link className='link'  to={"/"}>About</Link>
          </div>
          <div className="item">
            <Link  className='link' to={"/"}>Connect</Link>
          </div>
          <div className="item">
            <Link className='link'  to={"/"}></Link>
          </div>
          <div className="icons">
            <HiSearch />
            <HiOutlineUserCircle />
            <FaRegHeart />
            <div className="cart-icon" onClick={()=>setOpenCart(!openCart)}>
              <BsCart3 />
              <span>{totalQuantity}</span>
            </div>
          </div>
        </div>
      </div>
      {openCart && <Cart/>}
    </nav >
  );
}

export default NavBar;
