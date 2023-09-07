import React from "react";
import Slider from "../../components/Slider/Slider";
import './Home.scss';
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Category from "../../components/Category/Category";
import Contact from "../../components/Contact/Contact";
import Slideshow from "../../components/ImageSlider.jsx/Slideshow";

const HomePage = ()=>{
  return <div className="home" >
    {/* <Slider/> */}
    <Slideshow/>
    <FeaturedProducts type= 'featured'/>
    <Category/>
    <FeaturedProducts type = 'trending'/>
    <Contact/>
  </div>
}

export default HomePage;