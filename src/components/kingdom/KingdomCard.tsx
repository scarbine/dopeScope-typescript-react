import React from "react";

export interface Kingdom {
  id: number;
  name: string;
  description: string;
}

export const KingdomCard: React.FC<Kingdom> = ({ id, name, description }) => {
  return (
    <>
      <div>Kingdom Card</div>
      <div>
        {id}: {name}
      </div>
      <div>{description}</div>
    </>
  );
};
