import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import user from "../images/user.jpg";
import userm from "../images/userm.jpeg";
import userf from "../images/userf.jpeg";
import Header from "./Header";
import { useContactsCrud } from "../context/ContactsCrudContext";

const ContactDetail = () => {
  const { removeContactHandler, currentTheme } = useContactsCrud();
  const location = useLocation();
  const { id, name, email, gender } = location.state.contact;
  const navigate = useNavigate();
  const deleteContact = (id) => {
    removeContactHandler(id);
    navigate("/list")
  };
  

  return (
    <div
      className="addContact"
      style={{
        backgroundColor: currentTheme
          ? "rgba(0, 0, 0, 0.836)"
          : "rgba(255, 255, 255, 0.37)",
        borderRadius: "10px",
      }}
    >
      <div className="main">
        <div className="ui card centered">
          <div className="image">
            <img src={gender === "Male" ? userm : userf} alt="user" />
          </div>
          <div
            className="content"
            style={{
              backgroundColor: currentTheme
                ? "rgba(0, 0, 0, 0.836)"
                : "rgba(255, 255, 255, 0.37)",
              borderRadius: "10px",
              
              
            }}
          >
            <div
              className="header"
              style={{
                color: currentTheme ? "white" : "black",
              }}
            >
              {name}
            </div>
            <div
              className="description"
              style={{
                color: currentTheme ? "white" : "black",
              }}
            >
              {email}
            </div>
            <div
              style={{ display: "flex", alignContent: "end", float: "right",flexDirection:"row" }}
            >
              <Link to={`/edit`} state={{ contact: location.state.contact }}>
                <i
                  className="large edit alternate outline  icon "
                  style={{
                    color: "blue",
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
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Link to="/list">
            <button class="ui  button green center">Go back</button>
          </Link>
        </div>
        <div class="ui hidden divider"></div>
        <div
          style={{
            paddingBottom: "30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            className="from"
            style={{
              color: "white",

              fontSize: "18px",
              paddingRight: "95px",
            }}
          >
            from
          </div>
          <div style={{ color: "white", fontSize: "23px", marginTop: "10px" }}>
            BHARATH VAULT
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactDetail;
