import React from "react";
import { Kingdom } from "./iKingdom";


export const KingdomCard: React.FC<Kingdom> = (props) => {
  return (
    <>
      <div>Kingdom Card</div>
      <div>
        {props.id}: {props.name}
      </div>
      <div>{props.description}</div>
    </>
  );
};
