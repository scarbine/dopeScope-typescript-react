import React from "react";
import { SlideCard } from "./SlideCard";
import "./Slide.css";
import { SlideListData } from "./SlideProvider";


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
