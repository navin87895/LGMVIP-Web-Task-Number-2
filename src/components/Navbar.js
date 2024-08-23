import React from "react";

const Navbar = ({ onGetUsers }) => {
  return (
    <nav className="navbar">
      <h1>BrandName</h1>
      <button onClick={onGetUsers} className="get-users-btn">
        Get Users
      </button>
    </nav>
  );
};

export default Navbar;
