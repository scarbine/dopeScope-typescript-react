import React from "react";
import { Slide, SlideCard } from "./SlideCard";

let SlideListData: Slide[] = [
  {
    id: 1,
    name: "plant",
    collectedBy: 12,
    dateCollected: "12/12/2021",
    description: "green",
    picURL : "https://res.cloudinary.com/ddaeunjfu/image/upload/v1631242580/vnvwgcqviv8pb5ploo9t.jpg"
  },
  {
    id: 2,
    name: "bone",
    collectedBy: 12,
    dateCollected: "2/2/2021",
    description: "white",
    picURL : "https://res.cloudinary.com/ddaeunjfu/image/upload/q_auto:best/v1631242580/vnvwgcqviv8pb5ploo9t.jpg"


  },
  {
    id: 1,
    name: "bug",
    collectedBy: 12,
    dateCollected: "1/12/2021",
    description: "eww",
    picURL : "https://res.cloudinary.com/ddaeunjfu/image/upload/q_auto:best/v1631242580/vnvwgcqviv8pb5ploo9t.jpg"
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
          picURL={slide.picURL}
        />
      </>
    );
  })};
  </>)
};
