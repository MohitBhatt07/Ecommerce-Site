import React from "react";
import Slider from "../../components/Slider/Slider";
import './Home.scss';
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";

const HomePage = ()=>{
  return <div>
    <Slider/>
    <FeaturedProducts type= 'featured'/>
    <FeaturedProducts type = 'trending'/>
  </div>
}

export default HomePage;