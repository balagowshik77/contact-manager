import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";
import Header from "./Header";

const EditContact = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, name, email, gender } = location.state.contact;
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const [newGender, setNewGender] = useState(gender);
  const { updateContactHandler, currentTheme } = useContactsCrud();

  const update = (e) => {
    e.preventDefault();
    if (newName === "" || newEmail === "" || newGender === "") {
      alert("This fields are madatory");

      return;
    }
    updateContactHandler({
      id,
      name: newName,
      email: newEmail,
      gender: newGender,
    });
    setNewName("");
    setNewEmail("");
    setNewGender("");
    navigate("/list");
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
      <div className="ui main">
        <h2
          style={{
            color: currentTheme ? "white" : "black",
            marginLeft: "10px",
          }}
        >
          Edit contact
        </h2>

        <form className="ui form" onSubmit={update}>
          <div className="field">
            <label
              style={{
                color: currentTheme ? "white" : "black",
                marginLeft: "10px",
              }}
            >
              Name
            </label>
            <input
              type={"text"}
              name="Name"
              placeholder="Name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              style={{
                backgroundColor: currentTheme
                  ? "rgba(255, 255, 255, 0.37)"
                  : "rgba(0, 0, 0, 0.507)",
                borderRadius: "100px",
              }}
            />
          </div>
          <div className="field">
            <label
              style={{
                color: currentTheme ? "white" : "black",
                marginLeft: "10px",
              }}
            >
              Email
            </label>
            <input
              type={"email"}
              name="Email"
              placeholder="Email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              style={{
                backgroundColor: currentTheme
                  ? "rgba(255, 255, 255, 0.37)"
                  : "rgba(0, 0, 0, 0.507)",
                borderRadius: "100px",
              }}
            />
          </div>

          <div class="inline fields">
            <label
              style={{
                color: currentTheme ? "white" : "black",
                marginLeft: "10px",
              }}
            >
              Gender
            </label>
            <div class="field">
              <div class="ui radio checkbox">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={(e) => setNewGender(e.target.value)}
                />
                <label style={{ color: currentTheme ? "white" : "black" }}>
                  Male
                </label>
              </div>
            </div>
            <div class="field">
              <div class="ui radio checkbox">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={(e) => setNewGender(e.target.value)}
                />
                <label style={{ color: currentTheme ? "white" : "black" }}>
                  Female
                </label>
              </div>
            </div>
          </div>
          <div
            style={{
              color: currentTheme ? "white" : "black",
              marginLeft: "10px",
            }}
          >
            <button
              className="ui button blue "
              style={{ borderRadius: "100px" }}
            >
              Update
            </button>
            <Link to="/list">
              {" "}
              <button
                className="ui button red right"
                style={{ borderRadius: "100px" }}
              >
                cancel
              </button>
            </Link>
          </div>
        </form>
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
  );
};

export default EditContact;
