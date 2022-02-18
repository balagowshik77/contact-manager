import React, { Component, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";
import Header from "./Header";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const { addContactHandler,currentTheme } = useContactsCrud();
  const navigate = useNavigate();

  const add = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || gender === "") {
      alert("This fields are madatory");

      return;
    }
    addContactHandler({ name, email, gender });
    setName("");
    setEmail("");
    setGender("");
    navigate("/list");
  };

  return (
    <div className="addContact" style={{backgroundColor:currentTheme?"rgba(0, 0, 0, 0.836)":"rgba(255, 255, 255, 0.37)" , borderRadius:"10px"}}>
      <div className="ui main">
        <h2 style={{color:currentTheme?"white":"black",marginLeft:"10px"}}>Add contact</h2>

        <form className="ui form" onSubmit={add} >
          <div className="field" style={{color:currentTheme?"white":"black",marginLeft:"10px"}}>
            <label style={{color:currentTheme?"white":"black",marginLeft:"10px"}}>Name</label>
            <input
              type={"text"}
              name="Name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{backgroundColor:currentTheme?"rgba(255, 255, 255, 0.37)":"rgba(0, 0, 0, 0.507)",borderRadius:"100px"}}
            />
          </div>
          <div className="field" style={{color:currentTheme?"white":"black",marginLeft:"10px"}}>
            <label style={{color:currentTheme?"white":"black",marginLeft:"10px"}}>Email</label>
            <input
              type={"email"}
              name="Email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{backgroundColor:currentTheme?"rgba(255, 255, 255, 0.37)":"rgba(0, 0, 0, 0.507)",borderRadius:"100px"}}
            />
          </div>
          <div class="ui form" style={{color:currentTheme?"white":"black",marginLeft:"10px"}}>
            <div class="inline fields">
              <label style={{color:currentTheme?"white":"black",marginLeft:"10px"}}>Gender</label>
              <div class="field">
                <div class="ui radio checkbox">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label style={{color:currentTheme?"white":"black"}}>Male</label>
                </div>
              </div>
              <div class="field">
                <div class="ui radio checkbox">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label style={{color:currentTheme?"white":"black"}}>Female</label>
                </div>
              </div>
            </div>
          </div>
          <div style={{color:currentTheme?"white":"black",marginLeft:"10px"}}>
          <button className="ui button blue "  style={{borderRadius:"100px"}}>Save</button>
          <Link to="/list">
            <button className="ui button red right"  style={{borderRadius:"100px"}}>cancel</button>
          </Link>
          </div>

          
        </form>
      </div>
       <div class="ui hidden divider"></div>
        <div style={{paddingBottom:"30px",display:"flex",flexDirection:"column",alignItems:"center"}}>
          <div
            className="from"
            style={{
              color: "white",
              paddingRight:"95px",
              fontSize: "18px",
              
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

export default AddContact;
