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
                { url: 'https://infytechai.com/image-1.jpg', title: "" },
                { url: 'https://infytechai.com/image-2.jpg', title: "" },
                { url: 'https://infytechai.com/image-3.jpg', title: "" },
                { url: 'https://infytechai.com/image-4.jpg', title: "" },
                { url: 'https://infytechai.com/image-5.jpg', title: "" }
            ]
        },
        {
            "Hospitality": [
                { url: 'https://infytechai.com/image-1.jpg', title: "" },
                { url: 'https://infytechai.com/image-2.jpg', title: "" },
                { url: 'https://infytechai.com/image-3.jpg', title: "" },
                { url: 'https://infytechai.com/image-4.jpg', title: "" },
                { url: 'https://infytechai.com/image-5.jpg', title: "" }
            ]
        },
        {
            "Healthcare": [
                { url: 'https://infytechai.com/image-1.jpg', title: "" },
                { url: 'https://infytechai.com/image-2.jpg', title: "" },
                { url: 'https://infytechai.com/image-3.jpg', title: "" },
                { url: 'https://infytechai.com/image-4.jpg', title: "" },
                { url: 'https://infytechai.com/image-5.jpg', title: "" }
            ]
        },
        {
            "Mixed Use": [
                { url: 'https://infytechai.com/image-1.jpg', title: "" },
                { url: 'https://infytechai.com/image-2.jpg', title: "" },
                { url: 'https://infytechai.com/image-3.jpg', title: "" },
                { url: 'https://infytechai.com/image-4.jpg', title: "" },
                { url: 'https://infytechai.com/image-5.jpg', title: "" }
            ]
        },
        {
            "Retail": [
                { url: 'https://infytechai.com/image-1.jpg', title: "" },
                { url: 'https://infytechai.com/image-2.jpg', title: "" },
                { url: 'https://infytechai.com/image-3.jpg', title: "" },
                { url: 'https://infytechai.com/image-4.jpg', title: "" },
                { url: 'https://infytechai.com/image-5.jpg', title: "" }
            ]
        },
        {
            "Offices": [
                { url: 'https://infytechai.com/image-1.jpg', title: "" },
                { url: 'https://infytechai.com/image-2.jpg', title: "" },
                { url: 'https://infytechai.com/image-3.jpg', title: "" },
                { url: 'https://infytechai.com/image-4.jpg', title: "" },
                { url: 'https://infytechai.com/image-5.jpg', title: "" }
            ]
        },
        {
            "Industries & Warehouses": [
                { url: 'https://infytechai.com/image-1.jpg', title: "" },
                { url: 'https://infytechai.com/image-2.jpg', title: "" },
                { url: 'https://infytechai.com/image-3.jpg', title: "" },
                { url: 'https://infytechai.com/image-4.jpg', title: "" },
                { url: 'https://infytechai.com/image-5.jpg', title: "" }
            ]
        },
        {
            "Residential": [
                { url: 'https://infytechai.com/image-1.jpg', title: "" },
                { url: 'https://infytechai.com/image-2.jpg', title: "" },
                { url: 'https://infytechai.com/image-3.jpg', title: "" },
                { url: 'https://infytechai.com/image-4.jpg', title: "" },
                { url: 'https://infytechai.com/image-5.jpg', title: "" }
            ]
        },
        {
            "Education": [
                { url: 'https://infytechai.com/image-1.jpg', title: "" },
                { url: 'https://infytechai.com/image-2.jpg', title: "" },
                { url: 'https://infytechai.com/image-3.jpg', title: "" },
                { url: 'https://infytechai.com/image-4.jpg', title: "" },
                { url: 'https://infytechai.com/image-5.jpg', title: "" }
            ]
        },
        {
            "Data Center": [
                { url: 'https://infytechai.com/image-1.jpg', title: "" },
                { url: 'https://infytechai.com/image-2.jpg', title: "" },
                { url: 'https://infytechai.com/image-3.jpg', title: "" },
                { url: 'https://infytechai.com/image-4.jpg', title: "" },
                { url: 'https://infytechai.com/image-5.jpg', title: "" }
            ]
        },
        {
            "Institutional": [
                { url: 'https://infytechai.com/image-1.jpg', title: "" },
                { url: 'https://infytechai.com/image-2.jpg', title: "" },
                { url: 'https://infytechai.com/image-3.jpg', title: "" },
                { url: 'https://infytechai.com/image-4.jpg', title: "" },
                { url: 'https://infytechai.com/image-5.jpg', title: "" }
            ]
        },
        {
            "Infrastructure": [
                { url: 'https://infytechai.com/image-1.jpg', title: "" },
                { url: 'https://infytechai.com/image-2.jpg', title: "" },
                { url: 'https://infytechai.com/image-3.jpg', title: "" },
                { url: 'https://infytechai.com/image-4.jpg', title: "" },
                { url: 'https://infytechai.com/image-5.jpg', title: "" }
            ]
        },
        {
            "Net Zero Buildings": [
                { url: 'https://infytechai.com/image-1.jpg', title: "" },
                { url: 'https://infytechai.com/image-2.jpg', title: "" },
                { url: 'https://infytechai.com/image-3.jpg', title: "" },
                { url: 'https://infytechai.com/image-4.jpg', title: "" },
                { url: 'https://infytechai.com/image-5.jpg', title: "" }
            ]
        },
        {
            "Resturant and Bar": [
                { url: 'http://localhost:3000/bar-design-img01.jpg', title: "" },
                { url: 'http://localhost:3000/bar-design-img02.jpg', title: "" },
                { url: 'http://localhost:3000/bar-design-img03.jpg', title: "" },
                { url: 'http://localhost:3000/bar-design-img04.jpg', title: "" },
                { url: 'http://localhost:3000/bar-design-img07.jpg', title: "" },
                { url: 'http://localhost:3000/bar-design-img08.jpg', title: "" },
                { url: 'http://localhost:3000/bar-design-img09.jpg', title: "" },
                { url: 'http://localhost:3000/bar-design-img10.jpg', title: "" },
                { url: 'http://localhost:3000/bar-design-img11.jpg', title: "" },
                { url: 'http://localhost:3000/bar-design-img12.jpg', title: "" },
                { url: 'http://localhost:3000/bar-design-img13.jpg', title: "" },
            ]
        }
    ];

    return (
        <html>
            <Header />
            <body className="project-body">
                <div id="main" className="project-main-container">
                    <div className="project-page_title">
                        <div className="title-container">
                            <h1 className="">Projects</h1>
                        </div>
                    </div>
                </div>
                {titleImages.map((item, index) => (
                <ImageGalleryBlock title={Object.keys(item)[0]} images={item[Object.keys(item)]} />
                ))}
            </body>
            <Footer />
        </html>
    );
}


export default Projects;