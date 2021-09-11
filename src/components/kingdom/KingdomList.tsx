import React from "react";
import { KingdomCard } from "./KingdomCard";
import { KingdomData } from "./KingdomProvider";

export const KingdomList: React.FC = () => {
  return (
    <>
      <div className="kingdom-list-container">
        {KingdomData.map((Kingdom) => {
          return (
            <KingdomCard
              id={Kingdom.id}
              name={Kingdom.name}
              description={Kingdom.description}
            />
          );
        })}
      </div>
    </>
  );
};
