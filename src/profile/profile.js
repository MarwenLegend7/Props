import React from "react";
import PropTypes from "prop-types";
// import cat from "../cat.jpg"
export const Profile = ({fullname,bio,profession,children}) => {
  const unknown = "Unknown"
  
  return (
    <div>
      <h3>fullname:{fullname} </h3>
      <h3>Bio: {bio} </h3>
      <h3>profession: {profession} </h3>
    
    <div>
        {children}
    </div>
    </div>
 
  )
}
Profile.defaultProps = {
  fullname : "Uknown",
  bio : "Uknown",
  profession : "Uknown",
  children: 
    <h1> NO profile Pic</h1>
}
Profile.propTypes = {
  fullname : PropTypes.string,
  bio : PropTypes.string,
  profession : PropTypes.string,
};

