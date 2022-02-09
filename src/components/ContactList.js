import React, { useEffect, useRef } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";

const ContactList = () => {
  const { contacts, retrieveContacts, searchTerm, searchHandler, searchResult } =
    useContactsCrud();

  const contactss = searchTerm.length < 1 ? contacts : searchResult  
  const inputEl = useRef("");

  useEffect(() => {
    retrieveContacts();
  }, []);
  const getSearchTerm = () => {
    searchHandler(inputEl.current.value);
    
  };

  const renderContactList = contactss.map((contact) => {
    return <ContactCard contact={contact} key={contact.id} />;
  });

  return (
    <div className="main">
      <h1 className="Header">
        Contact List
        <div style={{ display: "flex", float: "right" }}>
          <Link to="/add">
            <button className="ui button blue right">Add Contact</button>
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
            style={{ width: "100%" }}
          />
          <i className="search icon"></i>
        </div>
      </div>

      <div />

      <div className="ui celled list">{renderContactList.length > 0 ? renderContactList : "No contacts available"}</div>
    </div>
  );
};

export default ContactList;
