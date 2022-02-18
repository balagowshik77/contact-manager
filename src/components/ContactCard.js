import React from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";
import userm from "../images/userm.jpeg";
import userf from "../images/userf.jpeg";

import { useContactsCrud } from "../context/ContactsCrudContext";

const ContactCard = (props) => {
  const { removeContactHandler,currentTheme } = useContactsCrud();
  const deleteContact = (id) => {
    removeContactHandler(id);
  };
  const { id, name, email, gender } = props.contact;

  return (
    <div className="item" style={{ padding: "20px" }}>
      <img
        className="ui avatar image"
        src={gender === "Male" ? userm : userf}
        alt="user"
      />
      <div className="content">
        <Link to={`/ContactDetail/${id}`} state={{ contact: props.contact }}>
          <div className="header" style={{color:currentTheme?"white":"black"}}>{name}</div>
          <div style={{color:currentTheme?"rgb(30, 92, 226)":"rgb(33, 30, 226)"}}>{email}</div>
        </Link>
      </div>
      <div style={{ display: "flex", alignContent: "end", float: "right" }}>
        <Link to={`/edit`} state={{ contact: props.contact }}>
          <i
            className="large edit alternate outline   icon "
            style={{
              color: "#1e5de4f6",
              alignItems: "self-end",
              marginBottom: "10px",
              marginTop: "10px",
            }}
          ></i>
        </Link>
        <div style={{ cursor: "pointer" }}>
          <i
            className="large trash alternate outline  icon "
            style={{
              color: "red",
              alignItems: "self-end",
              marginBottom: "10px",
              marginTop: "10px",
              marginLeft: "10px",
            }}
            onClick={() => deleteContact(id)}
          ></i>
        </div>
      </div>
    </div>
  );
};
export default ContactCard;
