import React from 'react'
import TextField from "@mui/material/TextField";
import SettingsIcon from '@mui/icons-material/Settings';
const Navbar = () => {
  return (
    <div className=' text-black flex items-center px-4 justify-between w-[100%]'>
        <div>
        <h1 className='text-xl font-lg'>Dashboard</h1>

        </div>
        <div className='flex items-center gap-2'>
          <div>
            <TextField
      label="Search"
      variant="outlined"
      size="small"
      fullWidth
    />
          </div>
          <div className='cursor-pointer active:scale-95 transition-transform '>
            <SettingsIcon sx={{ fontSize: 30 }} className="text-gray-600 hover:text-[#51cbce]"/>
          </div>
        </div>

    </div>
  )
}

export default Navbar
