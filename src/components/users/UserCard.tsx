import React from "react"
import "./User.css"


export interface User {
	id: number,
	firstName: string,
	lastName: string,
}


export const UserCard : React.FC<User> = ({id, firstName, lastName}) => {

	return(
		<>
		<h1>{id}</h1>
		<h1>{firstName}</h1>
		<h1>{lastName}</h1>
		</>
	)
}