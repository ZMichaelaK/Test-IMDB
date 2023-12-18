import React from "react";
import logo from "../components/OIP.png";

function NavBar() {
  return (
    <div
      className="border
      flex items-center 
      space-x-7
      pl-2 py-2
      ">
      <img className="logo-smol" src={logo} alt="icon" />
      <h3 className="font-bold text-xl text-pink-300">Movies</h3>
      <h3 className="font-bold text-xl text-pink-300">Favourites</h3>
    </div>
  );
}

export default NavBar;
