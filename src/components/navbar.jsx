import React from "react";
import logo from "../components/OIP.png";

function NavBar() {
  return (
    <div
      className="border
      flex items-center
      space-x-8
      pl-3 py-4
      "
    >
      <img className="logo-smol" src={logo} alt="icon" />
      <h3 className="font-bold">Movies</h3>
      <h3 className="font-bold">Favourites</h3>
    </div>
  );
}

export default NavBar;
