import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import './layout.scss';

function MainLayout() {
  return (
    <div className="MainLayout">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
