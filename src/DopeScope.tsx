import React from "react"
import "./DopeScope.css"

import { SlideList } from "./components/slide/SlideList"
import { UserList } from "./components/users/UserList"
import { OrganismClassificationList } from "./components/OrganismClassification/OrganismClassificationList"

export const DopeScope: React.FC = () => {
	return(
		<>
			<h1>Dope Scope</h1>
			{/* <SlideCard name='plant' collectedBy={2} dateCollected='1/1/2021' description="green" id={1}  /> */}
			<div className="main-container">
			<SlideList />
			<UserList />
			<OrganismClassificationList />
			</div>
		</>
	)
}