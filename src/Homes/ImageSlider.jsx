import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCircle } from '@fortawesome/free-solid-svg-icons';

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

const sliderStyle = {
    height:'100%',
    position: 'relative',
    margin:'5px'
}

const slideStyles = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
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
    display:'flex',
    justifyContent: "center",
  }

  const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "10px",
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
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
  );
};

export default ImageSlider;