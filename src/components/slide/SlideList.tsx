import React from "react";
import { Slide, SlideCard } from "./SlideCard";

let SlideListData: Slide[] = [
  {
    id: 1,
    name: "plant",
    collectedBy: 12,
    dateCollected: "12/12/2021",
    description: "green",
  },
  {
    id: 2,
    name: "bone",
    collectedBy: 12,
    dateCollected: "2/2/2021",
    description: "white",
  },
  {
    id: 1,
    name: "bug",
    collectedBy: 12,
    dateCollected: "1/12/2021",
    description: "eww",
  },
];
export const SlideList: React.FC = () => {

return(
	<>
  {SlideListData.map((slide) => {
    return (
      <>
        <SlideCard
          name={slide.name}
          collectedBy={slide.collectedBy}
          dateCollected={slide.dateCollected}
          description={slide.description}
          id={slide.id}
        />
      </>
    );
  })};
  </>)
};
