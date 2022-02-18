import React, { useState } from "react";
import { useContactsCrud } from "../context/ContactsCrudContext";
import Switch from "./Switch";

const Header = () => {
  const [value, setValue] = useState(false);
  
  const {themeChanger} = useContactsCrud()

  

  const light = {
    backgroundColor: "rgba(255, 255, 255, 0.37)",
    color: "white",
    borderRadius:"10px"
  };
  const dark = {
    backgroundColor:"rgba(0, 0, 0, 0.781)",
    color: "silver",
    borderRadius:"10px"
  };
  const themeHandler = (e) => {
    setValue(!value);
    themeChanger(!value)
  };
  return (
    <div className="ui segment" style={value ? dark : light }>
      <div className="ui left aligned header">
        <h1 style={{ color: value ? "white" : "black" }}>
          VAULT
          <div style={{ display: "flex", float: "right", marginTop: "10px" }}>
            <Switch isOn={value} handleToggle={themeHandler} />
            <i
              class={value ? "moon icon" : "sun icon"}
              style={{
                fontSize: "15px",
                marginTop: "-7px",
                marginLeft:"3px",
                color: value ? "yellow" : "orange",
              }}
            ></i>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default Header;
