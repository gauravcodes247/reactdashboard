import React, { useEffect } from "react";

const Toast = ({ message, position, onClose }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const baseStyle =
    "fixed px-6 py-4 rounded-md shadow-lg text-white transition-all duration-300";

  const positions = {
    "top-left": "top-5 left-5",
    "top-center": "top-5 left-1/2 -translate-x-1/2",
    "top-right": "top-5 right-5",
    "bottom-left": "bottom-5 left-5",
    "bottom-center": "bottom-5 left-1/2 -translate-x-1/2",
    "bottom-right": "bottom-5 right-5",
  };

  return (
    <div className={`${baseStyle} ${positions[position]} bg-teal-500`}>
      {message}
      <button className="ml-4" onClick={onClose}>✕</button>
    </div>
  );
};

export default Toast;
