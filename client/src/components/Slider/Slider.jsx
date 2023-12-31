import React, { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import "./Slider.scss";

const imageData = [
  "https://img.freepik.com/free-photo/fashion-portrait-two-elegant-women-best-friends-posing-indoor-grey-wall-wearing-winter-fluffy-coat-black-casual-hat-fashionable-clothes-sisters-walking_273443-4074.jpg?w=996&t=st=1692170349~exp=1692170949~hmac=fbc99f98f5c5dd53543521251b19ca8c90902552733e4ae7e80afa5de0cc031d",
  "https://img.freepik.com/premium-photo/tourist-beach-man-outdoors-against-palm-trees-background-during-summer-vacations_158235-2081.jpg?w=996",
  "https://img.freepik.com/premium-photo/young-urban-people-posing-against-concrete-wall-street_143883-359.jpg?w=826",
  "https://img.freepik.com/premium-photo/fashion-friends-girls-bright-clothes-stand-bright-purpleviolet-colored-background_76964-25670.jpg?w=996",
];
function Slider() {
  const [currSlide, setCurrSlide] = useState(0);

  const prevSlide = () => {
    if (currSlide >= 1) setCurrSlide((prev) => prev - 1);
    else setCurrSlide(3);
  };

  const nextSlide = () => {
    if (currSlide === 3) setCurrSlide(0);
    else setCurrSlide((prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div className="container" style={{transform: `translateX(-${currSlide *100}vw)`}}>
        {imageData.map((item ,index) => (
          <img src={item} alt="" key={index}/>
        ))}
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}><FaChevronCircleLeft size={50}/></div>
        <div className="icon" onClick = {nextSlide}><FaChevronCircleRight size={50}/></div>
      </div>
    </div>
  
    // <div className="slider" style={{width: "98vw" ,height:'400px'}}>
    //   <div className="container" style={{width: "100%",height :'100%',backgroundSize:"cover" ,backgroundPosition:'center',backgroundImage : `url(${imageData[currSlide]})`}}>
        
    //   </div>
    //   <div className="icons">
    //     <div className="icon" onClick={prevSlide}><FaChevronCircleLeft size={50}/></div>
    //     <div className="icon" onClick = {nextSlide}><FaChevronCircleRight size={50}/></div>
    //   </div>
    // </div>
  
  );
}

export default Slider;
