import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";

import PersonIcon from '@mui/icons-material/Person';
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import CoPresentIcon from '@mui/icons-material/CoPresent';
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="text-white flex flex-col space-y-8 ml-4 mr-4 font-extralight">
      <div className="flex justify-around border-b border-gray-600 pb-2">
        <CoPresentIcon className='text-cyan-600'></CoPresentIcon>
        <h1 className="text-2xl font-light text-cyan-600">Gaurav</h1>
      </div>
      <div className="flex flex-col space-y-8 ">
        <Link to="/">
          <li className="flex items-center gap-3 px-4 py-3 hover:bg-slate-700">
            <DashboardIcon />
            <span>Dashboard</span>
          </li>
        </Link>
        
        
       <Link to='notifications'> <li className="flex items-center gap-3 px-4 py-3 hover:bg-slate-700">
          <NotificationsActiveIcon />
          <span>Notifications</span>
        </li></Link>
       <Link to='userprofile'> <li className="flex items-center gap-3 px-4 py-3 hover:bg-slate-700">
          <PersonIcon />
          <span>User Profile</span>
        </li></Link>
      </div>
    </div>
  );
};

export default Sidebar;
