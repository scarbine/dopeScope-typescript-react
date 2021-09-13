import React from "react";
import { OrganismClassification } from "./iOrganismClassification";



export const OrganismClassificationCard: React.FC<OrganismClassification> = (props) => {
  return (
    <>
      <div>{props.id} ) {props.Name}</div> 
    </>
  );
};
