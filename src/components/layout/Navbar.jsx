import React from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { useUI } from "../../hooks/useUI";
import { FiPlus } from "react-icons/fi";

function Navbar() {
  const { showModal, setShowModal } = useUI();

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
