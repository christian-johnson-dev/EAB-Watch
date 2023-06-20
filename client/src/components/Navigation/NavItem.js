import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ to, onClick, children, className }) => {
  // Component Logic
  return (
    <Link
      to={to}
      onClick={onClick}
      className={className}
    >
      {children}
    </Link>
  );
};

export default NavItem;
