import React from "react";
import { Slide } from "./iSlide";


  export const SlideCard: React.FC<Slide> = (props) => {
    
    return (
      <>
        <div className="slide-card">
        <h1> {props.name} </h1>
        <h5>Id: {props.id}</h5>
        <h5 >{props.description}</h5>
        <h5 >{props.dateCollected}</h5>
        <h5 >{props.collectedBy}</h5>
        <img src={props.picURL} alt={props.name} />
        </div>
      </>
    );
  };

  
  