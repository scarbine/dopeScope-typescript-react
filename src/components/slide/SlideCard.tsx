import React from "react";


  export interface Slide {
    id: number;
    name: string;
    description: string;
    dateCollected: string;
    collectedBy: number;
    picURL: string
  }

  export const SlideCard: React.FC<Slide> = ({
    id,
    name,
    description,
    dateCollected,
    collectedBy,
    picURL,
    
  } 
  ) => {
   
    return (
      <>
        <div className="card">
        <h1>{name}</h1>
        <h5 >{description}</h5>
        <h5 >{dateCollected}</h5>
        <h5 >{collectedBy}</h5>
        <img src={picURL} alt="Test" />
        </div>
      </>
    );
  };

