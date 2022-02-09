import { createContext, useContext, useState } from "react";
import api from "../api/contacts";
import { v4 as uuidv4 } from "uuid";

const contactsCrudContext = createContext();

export function ContactsCrudContextProvider({ children }) {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  //retrieve contacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    if (response.data) setContacts(response.data);
  };
  //deleteContacts
  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };
  //addContact
  const addContactHandler = async (contact) => {
    const request = {
      id: uuidv4(),
      ...contact,
    };
    const response = await api.post("/contacts", request);
    console.log(contact);
    setContacts([...contacts, response.data]);
  };
  //updateContact
  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };
  //searchHandler
  const searchHandler = async(searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm  !== "") {
      const newContactList =  contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResult(newContactList);
      
    } else {
      setSearchResult(contacts);
    }
  };
  const value = {
    contacts,
    retrieveContacts,
    removeContactHandler,
    addContactHandler,
    updateContactHandler,
    searchTerm,
    searchHandler,
    searchResult
  };
  return (
    <contactsCrudContext.Provider value={value}>
      {children}
    </contactsCrudContext.Provider>
  );
}

export function useContactsCrud() {
  return useContext(contactsCrudContext);
}
