import React from "react"
import { User } from "./UserList"
import "./User.css"


export const UserCard : React.FC<User> = (props) => {

	return(
		<>
		<h2>{props.id} ) {props.firstName} {props.lastName}</h2>
		</>
	)
}


