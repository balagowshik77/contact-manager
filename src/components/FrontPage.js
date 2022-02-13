import React from "react";
import bgimage from "../images/bgimage.png";
import { Link } from "react-router-dom";

const FrontPage = () => {
  return (
    <div
      className="bgColor"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        backgroundImage: `url(${bgimage}) `,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "fixed",
        left: "0",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <div class="ui center aligned basic segment">
          <div class="ui huge header" style={{ color: "white" }}>
            VAULT
          </div>
          <div class="ui large header" style={{ color: "white" }}>
            CONTACT-MANAGER
          </div>
          <div class="ui horizontal divider" style={{ color: "white" }}></div>
          <Link to="/list">
            <div
              class="big circular ui icon blue basic button"
              style={{ marginTop: "10px" }}
            >
              GET STARTED
            </div>
          </Link>
        </div>
        <div class="ui hidden divider"></div>
        <div className="footer">
          <h4 style={{ color: "white" }}>CREATED BY</h4>
          <h2 class="ui medium header" style={{ color: "white" }}>
            BHARATH VAULT
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
