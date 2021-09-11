import React from "react";

export interface OrganismClassification {
  id: number;
  Name: string;
}

export const OrganismClassificationCard: React.FC<OrganismClassification> = ({
  id,
  Name,
}) => {
  return (
    <>
      <div>{id} ) {Name}</div>
      
    </>
  );
};
