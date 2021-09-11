import React from "react";
import { Slide, SlideCard } from "./SlideCard";
import "./Slide.css";

let SlideListData: Slide[] = [
  {
    id: 1,
    userId: 1,
    name: "Plant",
    collectedBy: 12,
    dateCollected: "12/12/2021",
    description: "green",
    picURL:
      "https://res.cloudinary.com/ddaeunjfu/image/upload/v1631242580/vnvwgcqviv8pb5ploo9t.jpg",
  },
  {
    id: 2,
    userId: 1,
    name: "Bone",
    collectedBy: 12,
    dateCollected: "2/2/2021",
    description: "white",
    picURL:
      "https://res.cloudinary.com/ddaeunjfu/image/upload/q_auto:best/v1631242580/vnvwgcqviv8pb5ploo9t.jpg",
  },
  {
    id: 1,
    userId: 1,
    name: "Bug",
    collectedBy: 12,
    dateCollected: "1/12/2021",
    description: "eww",
    picURL:
      "https://res.cloudinary.com/ddaeunjfu/image/upload/q_auto:best/v1631242580/vnvwgcqviv8pb5ploo9t.jpg",
  },
];
export const SlideList: React.FC = () => {
  return (
    <>
      <div className="slide-list">
        {SlideListData.map((slide) => {
          return (
            <>
              <SlideCard
                name={slide.name}
                userId={slide.userId}
                collectedBy={slide.collectedBy}
                dateCollected={slide.dateCollected}
                description={slide.description}
                id={slide.id}
                picURL={slide.picURL}
              />
            </>
          );
        })}
        ;
      </div>
    </>
  );
};
