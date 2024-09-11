import React from 'react';
import Header from '../Homes/Header';
import Body from '../Homes/Body';
import Footer from '../Homes/Footer';
import ImageSlider from '../Homes/ImageSlider';
import '../App.css';

const Home = () => {

  const images = [
    {url:'https://design.infytechai.com/bar-design-img01.jpg', title:""},
    {url:'https://design.infytechai.com/bar-design-img02.jpg', title:""},
    {url:'https://design.infytechai.com/bar-design-img03.jpg', title:""},
    {url:'https://design.infytechai.com/bar-design-img04.jpg', title:""},
    {url:'https://design.infytechai.com/bar-design-img05.jpg', title:""},
    {url:'https://design.infytechai.com/bar-design-img07.jpg', title:""},
    {url:'https://design.infytechai.com/bar-design-img08.jpg', title:""},
    {url:'https://design.infytechai.com/bar-design-img09.jpg', title:""},
    {url:'https://design.infytechai.com/bar-design-img10.jpg', title:""},
    {url:'https://design.infytechai.com/bar-design-img11.jpg', title:""}
  ];

  //  const images = [
  //   {url:'http://localhost:3000/bar-design-img01.jpg', title:""},
  //   {url:'http://localhost:3000/bar-design-img02.jpg', title:""},
  //   {url:'http://localhost:3000/bar-design-img03.jpg', title:""},
  //   {url:'http://localhost:3000/bar-design-img04.jpg', title:""},
  //   {url:'http://localhost:3000/bar-design-img05.jpg', title:""},
  //   {url:'http://localhost:3000/bar-design-img07.jpg', title:""},
  //   {url:'http://localhost:3000/bar-design-img08.jpg', title:""},
  //   {url:'http://localhost:3000/bar-design-img09.jpg', title:""},
  //   {url:'http://localhost:3000/bar-design-img10.jpg', title:""},
  //   {url:'http://localhost:3000/bar-design-img11.jpg', title:""}
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
