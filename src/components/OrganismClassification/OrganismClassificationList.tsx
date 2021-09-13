import React from "react";
import { OrganismClassificationCard } from "./OrganismClassificationCard";
import { OrganismClassificationData } from "./OrganismClassificationData";


export const OrganismClassificationList: React.FC = () => {

  
  return (
    <>
      <div className="oc-list-container">
        <h3>Organism Classes</h3>
        {OrganismClassificationData.map((OC) => (
          <OrganismClassificationCard id={OC.id} Name={OC.Name} />
        ))}
      </div>
    </>
  );
};
