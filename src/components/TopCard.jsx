import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
const TopCard = ({ icon: Icon, title, value, color,status, logo:Updateicon }) => {
  return (
   <div className='h-[150px] flex-1 min-w-[250px] bg-white rounded-lg shadow-md flex flex-col font-light'>

      <div className='flex justify-around h-[75%] border-b border-gray-300 items-center font-[poppins]'>
        <div> <Icon sx={{ fontSize: 50 }} className={color} /></div>
        <div className='flex flex-col items-center'>
            <div className='text-medium font-extralight text-gray-600'>{title}</div>
            <div className='text-3xl font-light'>{value}</div>
        </div>
      </div>
      <div className='flex items-center gap-3 ml-3 mt-3 mb-3 text-gray-600 font-[poppins] font-extralight'><Updateicon/>{status}</div>
    </div>
  )
}

export default TopCard
