import React, { useState } from "react";
import ProfileContext from "./context";

export default function ProfileProvider({ children }) {

  const [profileData, setProfileData] = useState({
    id: "",
    name: "hi hello",
    email: "hello@world.com",
    cpf: "111.111.111-11"
  });

  return (
    <ProfileContext.Provider
      value={{
        profileData,
        setProfileData
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}
