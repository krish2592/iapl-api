import React from "react";
import Footer from '../Homes/Footer';
import Header from '../Homes/Header';
import '../HomePages/project.css'
import ImageGalleryBlock from "./ToggleGalley";

const Projects = () => {
    // const title = "ITES"
    // const images = [
    //     {url:'https://infytechai.com/image-1.jpg', title:""},
    //     {url:'https://infytechai.com/image-2.jpg', title:""},
    //     {url:'https://infytechai.com/image-3.jpg', title:""},
    //     {url:'https://infytechai.com/image-4.jpg', title:""},
    //     {url:'https://infytechai.com/image-5.jpg', title:""}
    //   ];

    const titleImages = [
        {
            "IT & ITES": [
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" }
            ]
        },
        {
            "Hospitality": [
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" }
            ]
        },
        {
            "Healthcare": [
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" }
            ]
        },
        {
            "Mixed Use": [
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" }
            ]
        },
        {
            "Retail": [
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" }
            ]
        },
        {
            "Offices": [
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" }
            ]
        },
        {
            "Industries & Warehouses": [
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" }
            ]
        },
        {
            "Residential": [
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" }
            ]
        },
        {
            "Education": [
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" }
            ]
        },
        {
            "Data Center": [
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" }
            ]
        },
        {
            "Institutional": [
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" }
            ]
        },
        {
            "Infrastructure": [
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" }
            ]
        },
        {
            "Net Zero Buildings": [
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" },
                { url: 'https://infytechai.com/', title: "" }
            ]
        },
        {
            "Resturant and Bar": [
                { url: 'https://design.infytechai.com/bar-design-img01.jpg', title: "" },
                { url: 'https://design.infytechai.com/bar-design-img02.jpg', title: "" },
                { url: 'https://design.infytechai.com/bar-design-img03.jpg', title: "" },
                { url: 'https://design.infytechai.com/bar-design-img04.jpg', title: "" },
                { url: 'https://design.infytechai.com/bar-design-img07.jpg', title: "" },
                { url: 'https://design.infytechai.com/bar-design-img08.jpg', title: "" },
                { url: 'https://design.infytechai.com/bar-design-img09.jpg', title: "" },
                { url: 'https://design.infytechai.com/bar-design-img10.jpg', title: "" },
                { url: 'https://design.infytechai.com/bar-design-img11.jpg', title: "" },
                { url: 'https://design.infytechai.com/bar-design-img12.jpg', title: "" },
                { url: 'https://design.infytechai.com/bar-design-img13.jpg', title: "" },
            ]
        }
    ];

    return (
        <html>
            <Header />
            <div id="main" className="project-main-container">
                <h1 className="project-main-container-h1">Projects</h1>
            </div>
            <br/>
            <body className="project-body">
                {titleImages.map((item, index) => (
                    <ImageGalleryBlock title={Object.keys(item)[0]} images={item[Object.keys(item)]} />
                ))}
            </body>
            <Footer />
        </html>
    );
}


export default Projects;