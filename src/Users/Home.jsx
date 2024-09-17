import React from 'react';
import Header from '../Homes/Header';
import Body from '../Homes/Body';
import Footer from '../Homes/Footer';
import ImageSlider from '../Homes/ImageSlider';
import '../App.css';

const Home = () => {

  const images = [
    {url:'https://www.infytechloopai.in/T!5.jpg', title:""},
    {url:'https://www.infytechloopai.in/T!10.jpg', title:""},
    {url:'https://www.infytechloopai.in/convention3.jpg', title:""},
    {url:'https://www.infytechloopai.in/Image2.png', title:""},
    {url:'https://www.infytechloopai.in/Image6.png', title:""},
    // {url:'https://www.infytechloopai.in/bar-design-img07.jpg', title:""},
    // {url:'https://www.infytechloopai.in/bar-design-img08.jpg', title:""},
    // {url:'https://www.infytechloopai.in/bar-design-img09.jpg', title:""},
    // {url:'https://www.infytechloopai.in/bar-design-img10.jpg', title:""},
    // {url:'https://www.infytechloopai.in/bar-design-img11.jpg', title:""}
  ];

  //  const images = [
  //   {url:'http://localhost:3000/T!5.jpg', title:""},
  //   {url:'http://localhost:3000/T!10.jpg', title:""},
  //   {url:'http://localhost:3000/convention3.jpg', title:""},
  //   {url:'http://localhost:3000/Image2.png', title:""},
  //   {url:'http://localhost:3000/Image6.png', title:""},
  //   // {url:'http://localhost:3000/bar-design-img07.jpg', title:""},
  //   // {url:'http://localhost:3000/bar-design-img08.jpg', title:""},
  //   // {url:'http://localhost:3000/bar-design-img09.jpg', title:""},
  //   // {url:'http://localhost:3000/bar-design-img10.jpg', title:""},
  //   // {url:'http://localhost:3000/bar-design-img11.jpg', title:""}
  // ];
  

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
