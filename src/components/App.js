import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import ContactDetail from "./ContactDetail";
import EditContact from "./EditContact";
import FrontPage from "./FrontPage";
import { ContactsCrudContextProvider } from "../context/ContactsCrudContext";

function App() {
  return (
    <div className="ui container body">
      <Router>
        <ContactsCrudContextProvider>
          <Routes>
            <Route path="/" exact element={<FrontPage />} />
            <Route path="/list" element={<ContactList />} />
            <Route path="/add" element={<AddContact />} />
            <Route path="/ContactDetail/:id" element={<ContactDetail />} />
            <Route path="/edit" element={<EditContact />} />
          </Routes>
        </ContactsCrudContextProvider>
      </Router>
    </div>
  );
}

export default App;
