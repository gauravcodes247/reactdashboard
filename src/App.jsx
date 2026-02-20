import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DashboardPage from "./pages/DashboardPage";
import Icons from "./pages/Icons";
import Maps from "./pages/Maps";
import Notifications from "./pages/Notifications";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProfile from "./pages/UserProfile";
const App = () => {
  return (
  
    <div className="min-h-screen flex flex-row">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="colored"
      />
      {/* sidebar */}
      <div className="w-[260px] bg-[#212120] text-white p-4 font-extralight text-xl font-[poppins]">
        <Sidebar/>
      </div>
      
      {/* main content */}
      <div className="flex-1 flex flex-col">
        {/* navbar */}
        <div className="h-16 bg-[#f4f3ef] text-black flex items-center px-4 border-b border-gray-300 w-[100%]">
          <Navbar/>
        </div>

        {/* content */}
        <div className="flex-1 bg-[#f4f3ef] p-6">
         <Routes>
          <Route path="/" element={<DashboardPage />} />
         
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/userprofile" element={<UserProfile />} />
         </Routes>
        </div>

        {/* footer */}
        <div className="h-16 flex justify-between mr-5 items-center">
          <div className="flex flex-row gap-4 ml-5">
            <span>Gaurav</span>
            <span>Blog</span>
            <span>Licenses</span>
          </div>
          <div><Footer></Footer></div>
        </div>
      </div>

    </div>
  );
};

export default App;
