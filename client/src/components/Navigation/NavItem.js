import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ to, children }) => {
  // Component Logic
  return (
    <div className="mr-4">
      <Link
        to={to}
        className="underline-expand text-teal-400"
      >
        {children}
      </Link>
    </div>
  );
};

export default NavItem;
