import React from 'react';
import Header from '../Homes/Header';
import Body from '../Homes/Body';
import Footer from '../Homes/Footer';
import ImageSlider from '../Homes/ImageSlider';
import '../App.css';

const Home = () => {
  
  const images = [
    {url:'http://localhost:3000/image-1.jpg', title:""},
    {url:'http://localhost:3000/image-2.jpg', title:""},
    {url:'http://localhost:3000/image-3.jpg', title:""},
    {url:'http://localhost:3000/image-4.jpg', title:""},
    {url:'http://localhost:3000/image-5.jpg', title:""}
  ];


  return (
    <div className='main-display-container'>
        <Header/>
        <ImageSlider slides={images}/>
        <Body/>
        <Footer/>
    </div>
  );
};

export default Home;
