import React, { Component, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { addContactHandler } = useContactsCrud();
  const navigate = useNavigate();

  const add = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("This fields are madatory");

      return;
    }
    addContactHandler({ name, email });
    setName("");
    setEmail("");
    navigate("/");
  };

  return (
    <div className="ui main">
      <h2>Add contact</h2>

      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type={"text"}
            name="Name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type={"email"}
            name="Email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button className="ui button blue ">Save</button>
        <Link to="/"> <button className="ui button red right">cancel</button>
        </Link>
       
      </form>
    </div>
  );
};

export default AddContact;
