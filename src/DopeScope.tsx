import React from "react"
import { SlideCard } from "./components/slide/SlideCard"
import { SlideList } from "./components/slide/SlideList"

export const DopeScope: React.FC = () => {
	return(
		<>
			<h1>Dope Scope</h1>
			{/* <SlideCard name='plant' collectedBy={2} dateCollected='1/1/2021' description="green" id={1}  /> */}
			<SlideList />
		</>
	)
}