import React from "react";
import { UserCard } from "./UserCard";
import "./User.css"

export interface User {
  id: number;
  firstName: string;
  lastName: string;
}

const UsersListData: User[] = [
  {
    id: 1,
    firstName: "Sam",
    lastName: "Carbine",
  },
  {
    id: 2,
    firstName: "Holden",
    lastName: "Carbine",
  },
  {
    id: 3,
    firstName: "Bella",
    lastName: "Carbine",
  },
];

export const UserList: React.FC = () => {
  return (
    <>
    <div className="user-container" >
      {UsersListData.map((user) => {
        return (
          <UserCard
            id={user.id}
            firstName={user.firstName}
            lastName={user.lastName}
          />
	  );
	})}
	</div>
    </>
  );
};
