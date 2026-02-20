import React from "react";
import { toast } from "react-toastify";

const Notifcard = ({ value, position }) => {

  const handleClick = () => {
    toast.success(`Notification from ${value}!`, {
      position: position
    });
  };

  return (
    <button
      onClick={handleClick}
      className="h-9 w-32 bg-cyan-300 flex items-center justify-center rounded-lg shadow-md font-light text-sm cursor-pointer hover:bg-cyan-400 transition"
    >
      <h3>{value}</h3>
    </button>
  );
};

export default Notifcard;
