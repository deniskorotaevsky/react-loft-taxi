import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const Profile = (props) => {

  const { logOut } = useContext(AuthContext)

  const unauthenticate = () => {
    logOut();
    props.navigate("home");
  };

  return (
    <p>
      Profile.
      <button onClick={unauthenticate}>Log out</button>
    </p>
  );
}

export default Profile;
