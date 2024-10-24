import React from "react";
import "./DropdownContent.css";

const DropdownContent = ({ children, isOpen }) => {
  return (
    <div className={`dropdown-content ${isOpen ? "content-open" : null}`}>
      {children}
    </div>
  );
};

export default DropdownContent;
