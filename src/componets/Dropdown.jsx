import React, { useState } from "react";
import DropdownButton from "./DropdownButton";
import DropdwonContent from "./DropdwonContent";
import "./Dropdown.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Dropdown = ({ buttonText, content }) => {
  const [open, setOpen] = useState(false);
  const toggleDropdown = () => {
    setOpen((open) => !open);
  };
  return (
    <div className="dropdown">
      <DropdownButton toggle={toggleDropdown} open={open}>
        {buttonText}
      </DropdownButton>
      <DropdwonContent>{content}</DropdwonContent>
    </div>
  );
};

export default Dropdown;
