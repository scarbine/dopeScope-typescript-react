import React from "react";

  export interface Slide {
    id: number;
    name: string;
    description: string;
    dateCollected: string;
    collectedBy: number;
  }

  export const SlideCard: React.FC<Slide> = ({
    id,
    name,
    description,
    dateCollected,
    collectedBy,
  }) => {
    return (
      <>
        <h1 className="card">{id}</h1>
        <h1 className="card">{name}</h1>
        <h1 className="card">{description}</h1>
        <h1 className="card">{dateCollected}</h1>
        <h1 className="card">{collectedBy}</h1>
      </>
    );
  };

