import React from "react";
import Notifcard from "../components/Notifcard";
import { toast } from "react-toastify";

const Notifications = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
 justify-items-center min-h-[300px]
 bg-white rounded-lg shadow-md"
    >
      <div className="col-span-full w-full flex flex-col items-center justify-center rounded-t-lg  font-[poppins] font-light text-gray-600 border-b border-gray-300">
        <h1 className="text-[40px]">Notifications</h1>
        <span className="text-[15px]">
          Click on buttons to view notofications
        </span>
      </div>
      <Notifcard value="Top Left" position="top-left" />
<Notifcard value="Top Center" position="top-center" />
<Notifcard value="Top Right" position="top-right" />
<Notifcard value="Bottom Left" position="bottom-left" />
<Notifcard value="Bottom Center" position="bottom-center" />
<Notifcard value="Bottom Right" position="bottom-right" />
    </div>
  );
};

export default Notifications;
