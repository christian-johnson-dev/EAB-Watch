import React from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  // Component Logic
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal p-6">
      <div className="flex items-center flex-no-shrink text-white mr-6">
        <span className="font-semibold text-x1 tracking-tight">EAB Watch</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <NavItem to="/report">Report a Sighting</NavItem>
          <NavItem to="/sightings">View Sightings</NavItem>
          <NavItem to="/learn-to-report">Learn to Report</NavItem>
          <NavItem to="/about">About EAB Watch</NavItem>
          <NavItem to="/eab-info">EAB in Oregon</NavItem>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
