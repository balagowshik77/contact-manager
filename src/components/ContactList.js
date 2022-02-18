import React, { useEffect, useRef } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";
import Header from "./Header";

const ContactList = () => {
  const {
    contacts,
    retrieveContacts,
    searchTerm,
    searchHandler,
    searchResult,
    currentTheme
  } = useContactsCrud();

  const contactss = searchTerm.length < 1 ? contacts : searchResult;
  const inputEl = useRef("");

  useEffect(() => {
    retrieveContacts();
  });
  const getSearchTerm = () => {
    searchHandler(inputEl.current.value);
  };

  const renderContactList = contactss.map((contact) => {
    return <ContactCard contact={contact} key={contact.id} />;
  });

  return (
    <div style={{backgroundColor:currentTheme?"rgba(0, 0, 0, 0.836)":"rgba(255, 255, 255, 0.37)" , borderRadius:"10px",height:"2000px"}}>
      <div  >
        <div className="main" style={{borderRadius:"10px"}}>
          <h1 className="Header" style={{color:currentTheme?"white":"black",marginLeft:"10px"}}>
            Contact List
            <div style={{ display: "flex", float: "right" }}>
              <Link to="/add">
                <button className="ui button blue right" style={{borderRadius:"100px"}}>Add Contact</button>
              </Link>
            </div>
          </h1>
          <div style={{ marginTop: "10px" }}>
            <div className="ui fluid icon input ">
              <input
                ref={inputEl}
                type="text"
                placeholder="Search Contacts"
                className="propmt"
                value={searchTerm}
                onChange={getSearchTerm}
                style={{ width: "90px",backgroundColor:currentTheme?"rgba(255, 255, 255, 0.37)":"rgba(0, 0, 0, 0.507)",borderRadius:"100px"}}
              />
              <i className="search icon"></i>
            </div>
          </div>

          <div />

          <div className="ui celled list">
            {renderContactList.length > 0
              ? renderContactList
              : <div style={{color:currentTheme?"white":"black"}}>No Contacts available</div>}
          </div>
        </div>
      </div>
      <div class="ui hidden divider"></div>
      <div  style={{paddingBottom:"30px",display:"flex",flexDirection:"column",alignItems:"center"}}>
        <div
         className="from"
          style={{
            color: "white",
            fontSize: "18px",
            paddingRight:"95px"
          
            
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

export default ContactList;
