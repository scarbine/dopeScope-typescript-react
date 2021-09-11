import React from "react";
import {
  OrganismClassification,
  OrganismClassificationCard,
} from "./OrganismClassificationCard";

export const OrganismClassificationData: OrganismClassification[] = [
  {
    id: 1,
    Name: "Kingdom",
  },
  {
    id: 2,
    Name: "Phylum",
  },
  {
    id: 3,
    Name: "Class",
  },
  {
    id: 4,
    Name: "Order",
  },
  {
    id: 5,
    Name: "Family",
  },
  {
    id: 6,
    Name: "Genus",
  },
  {
    id: 7,
    Name: "Species",
  },
];

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
