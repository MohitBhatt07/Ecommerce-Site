import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '50vh'
}
const slideImages = [
  {
    url: '"https://img.freepik.com/free-photo/fashion-portrait-two-elegant-women-best-friends-posing-indoor-grey-wall-wearing-winter-fluffy-coat-black-casual-hat-fashionable-clothes-sisters-walking_273443-4074.jpg?w=996&t=st=1692170349~exp=1692170949~hmac=fbc99f98f5c5dd53543521251b19ca8c90902552733e4ae7e80afa5de0cc031d"',
    
  },
  {
    url: 'https://img.freepik.com/premium-photo/tourist-beach-man-outdoors-against-palm-trees-background-during-summer-vacations_158235-2081.jpg?w=996',
    
  },
  {
    url: 'https://img.freepik.com/premium-photo/young-urban-people-posing-against-concrete-wall-street_143883-359.jpg?w=826',
    
  },
  {
    url : "https://img.freepik.com/premium-photo/fashion-friends-girls-bright-clothes-stand-bright-purpleviolet-colored-background_76964-25670.jpg?w=996"
  }
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide indicators ={true} transitionDuration={500} responsive={true} >
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                {/* <span style={spanStyle}>{slideImage.caption}</span> */}
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow;