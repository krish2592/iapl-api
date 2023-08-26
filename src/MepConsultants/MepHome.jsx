import React from 'react';
import MepHeader from '../MepConsultants/MepHeader';
import Body from '../Homes/Body';
import Footer from '../MepConsultants/MepFooter';
import ImageSlider from '../Homes/ImageSlider';
import '../App.css';

const Home = () => {

  const images = [
    {url:'https://infytechai.com/image-1.jpg', title:""},
    {url:'https://infytechai.com/image-2.jpg', title:""},
    {url:'https://infytechai.com/image-3.jpg', title:""},
    {url:'https://infytechai.com/image-4.jpg', title:""},
    {url:'https://infytechai.com/image-5.jpg', title:""}
  ];
  
  // const images = [
  //   {url:'http://localhost:3000/image-1.jpg', title:""},
  //   {url:'http://localhost:3000/image-2.jpg', title:""},
  //   {url:'http://localhost:3000/image-3.jpg', title:""},
  //   {url:'http://localhost:3000/image-4.jpg', title:""},
  //   {url:'http://localhost:3000/image-5.jpg', title:""}
  // ];


  return (
    <div className='main-display-container'>
        <MepHeader/>
        <ImageSlider slides={images}/>
        <Body/>
        <Footer/>
    </div>
  );
};

export default Home;
