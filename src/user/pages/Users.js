import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: " u1",
      name: "jeongtaerk",
      image:
        "https://lh3.googleusercontent.com/ogw/AOh-ky1_UeDyTSWb1ImF1iU0hGFJZM9TMeuXY1UAiXKG=s32-c-mo",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
