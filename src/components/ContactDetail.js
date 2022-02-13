import React from "react";
import { Link, useLocation } from "react-router-dom";
import user from "../images/user.jpg";
import userm from "../images/userm.jpeg";
import userf from "../images/userf.jpeg";

const ContactDetail = () => {
  const location = useLocation();
  const { id, name, email, gender } = location.state.contact;
  console.log({ gender });

  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={gender === "Male" ? userm : userf} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/list">
          <button class="ui  button green center">Go back</button>
        </Link>
      </div>
    </div>
  );
};
export default ContactDetail;
