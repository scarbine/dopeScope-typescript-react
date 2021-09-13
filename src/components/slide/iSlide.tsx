import React from "react"


export interface Slide {
    id: number;
    name: string;
    description: string;
    dateCollected: string;
    collectedBy: number;
    picURL: string
    userId: number;
  }