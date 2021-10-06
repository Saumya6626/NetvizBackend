import React from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import useStyles from "./styles";

const ImgCarousel = () => {
  const classes = useStyles();

  const images = [
    {
      src: "https://wallpapercave.com/wp/wp3076059.jpg"
    },
    { 
      src: "https://i.pinimg.com/originals/66/79/d9/6679d9e654e9426b546c3a84a8854c6d.jpg"
    },
    {
      src: "https://i.pinimg.com/originals/31/91/cf/3191cf55768e3928b60c17f7a606362d.jpg"
    },
    {
      src:"https://wallpaperaccess.com/full/345332.png"
    }
  ];

  return (
    <div className={classes.imgSlider1}>
      <Carousel
      className={classes.imgSlider}
      hasThumbnails={false}
      hasIndexBoard={false}
      hasSizeButton={false}
      hasMediaButton={false}
      isAutoPlaying={true} 
      autoPlayInterval={10000} 
      images={images} />
    </div>
  );
};

export default ImgCarousel;
