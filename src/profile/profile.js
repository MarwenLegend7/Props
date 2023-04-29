import React from "react";
// import cat from "../cat.jpg"
export const Profile = ({fullname,bio,profession,children}) => {
  const unknown = "Unknown"
  
  return (
    <div>
      <h3>fullname:{fullname === unknown ? "default name" : fullname} </h3>
      <h3>Bio: {bio === unknown ? "Student in GoMyCode" : bio} </h3>
      <h3>profession: {profession === unknown ? "default profession" : profession} </h3>
    
    <div>
        {children}
    </div>
    </div>
 
  )
}

