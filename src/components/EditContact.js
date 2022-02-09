import React, {  useState } from "react";
import { Link, useNavigate,useLocation } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";

const EditContact =()=> {
     const location = useLocation()
     const navigate = useNavigate()
     const {id,name,email} = location.state.contact;
     const [newName,setNewName] = useState(name)
     const [newEmail,setNewEmail] = useState(email)
     const {updateContactHandler} = useContactsCrud()
    



  const update = (e) => {
    e.preventDefault();
    if (newName === "" || newEmail === "") {
      alert("This fields are madatory");

      return;
    }
    updateContactHandler({id,name:newName,email:newEmail});
    setNewName("")
    setNewEmail("")
    navigate("/")
  
  };

    return (
      <div className="ui main">
        <h2>Edit contact</h2>
       

        <form className="ui form" onSubmit={update} >
          <div className="field">
            <label>Name</label>
            <input
              type={"text"}
              name="Name"
              placeholder="Name"
              value={newName}
              onChange={(e) => setNewName( e.target.value )}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type={"email"}
              name="Email"
              placeholder="Email"
              value={newEmail}
              onChange={(e) => setNewEmail(  e.target.value )}
            />
          </div>

          <button className="ui button blue ">Update</button>
          <Link to="/"> <button className="ui button red right">cancel</button>
        </Link>
         
        </form>
      </div>
    );
  }


export default EditContact;
