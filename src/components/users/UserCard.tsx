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
		<h2>{id} ) {firstName} {lastName}</h2>
		</>
	)
}