import React from "react";
import { FiAlignJustify } from "react-icons/fi";

export default function MenuButton({ openmenu }) {
  return (
    <div className="flex items-center " onClick={openmenu}>
      <FiAlignJustify
        size={40}
        color="black"
        className="border mx-2 cursor-pointer rounded-full p-2"
        id="menu"
      />
      <label htmlFor="menu" className="hidden fsc:flex">
        MENU
      </label>
    </div>
  );
}
