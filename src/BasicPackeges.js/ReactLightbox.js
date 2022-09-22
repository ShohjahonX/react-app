import React from "react";
import { SRLWrapper } from 'simple-react-lightbox';
import image from '../BasicPackeges.js/download.jpg'

const ReactLightbox = () => {
    return (
        <div>
         <SRLWrapper>
            <img src={image} alt="" />
            <img src={image} alt="" />
            <img src={image} alt="" />
         </SRLWrapper>
        </div>
    )
}

export default ReactLightbox;