import React from 'react'
import EditProfile from '../components/EditProfile'
import ProfileCard from '../components/ProfileCard'
const UserProfile = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      <div className='lg:col-span-1'>
        <ProfileCard></ProfileCard>
      </div>
      <div className='lg:col-span-2'>
        
           
            <EditProfile></EditProfile>
  
      </div>
    </div>
  )
}

export default UserProfile
