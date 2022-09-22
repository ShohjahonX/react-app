import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import ReactCarousel from 'react-alice-carousel'; 
import 'react-alice-carousel/lib/alice-carousel.css';
import image from '../BasicPackeges.js/download.jpg'
import './main.scss'; 

const ReactAlice = () => {

    const handleDragStart = (e) => e.preventDefault();

    const items = [
        <img src={image} onDragStart={handleDragStart} role="presentation" />,
        <img src={image} onDragStart={handleDragStart} role="presentation" />,
        <img src={image} onDragStart={handleDragStart} role="presentation" />,
      ];

    return (
        <div>
          <AliceCarousel mouseTracking items={items} />
        </div>
    )
}

export default ReactAlice;