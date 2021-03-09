import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };

  return (
    <nav
      style={{
        padding: "15px 0px 15px 30px",
        backgroundColor: "#dedcdc",
        fontWeight: "bold",
      }}
    >
      <NavLink to="/connections" activeStyle={activeStyle}>
        Connections
      </NavLink>
      {" | "}
      <NavLink to="/dashboard" activeStyle={activeStyle}>
        Dashboard
      </NavLink>
      {" | "}
      <NavLink to="/create-panel" activeStyle={activeStyle}>
        New Panel
      </NavLink>
    </nav>
  );
};

export default Header;
