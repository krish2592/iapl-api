import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCircle } from '@fortawesome/free-solid-svg-icons';

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

const containerStyle = {
    width: "100%",
    height: "500px",
    margin: "0 auto",
}

const sliderStyle = {
    height:'100%',
    position: 'relative',
}

const slideStyles = {
    width: '100%',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: '100% 100%',
    backgroundImage:`url(${slides[currentIndex].url})`
}

const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };
  
  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const dotStyleContainer = {
    position: "absolute",
    top: "93%",
    left: "20px",
    display:'flex',
    color:"darkblue"
  }

  const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "10px",
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    const timer = setInterval(goToNextSlide, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div style={containerStyle}>
    <div className="image-slider" style={sliderStyle}>
            <div style={leftArrowStyles} onClick={goToPreviousSlide}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div style={rightArrowStyles} onClick={goToNextSlide}>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
       <div style={slideStyles}></div>
       <div style={dotStyleContainer}>
        {slides.map((slide, index) => (
          <div key={index} style={dotStyle} onClick={() => goToSlide(index)}><FontAwesomeIcon icon={faCircle} /></div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ImageSlider;