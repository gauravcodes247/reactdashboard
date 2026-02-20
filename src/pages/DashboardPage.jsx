import React from 'react'
import TopCard from '../components/TopCard'
import LanguageIcon from "@mui/icons-material/Language";
import PaymentsIcon from '@mui/icons-material/Payments';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import UpdateIcon from '@mui/icons-material/Update';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import UserBehavior from '../components/charts/UserBehavior';
import PieChartComponent from '../components/charts/PieChartComponent';
import LineChartComponent from '../components/charts/LineChartComponent';
const DashboardPage = () => {
  return (
    
    <div className='flex flex-col gap-4'>
        <div className='flex flex-row gap-2 flex-wrap'>
            
      <TopCard
  icon={LanguageIcon}
  title="Capacity"
  value="150GB"
  color="text-orange-400" 
  status ="Update Now"
    logo={UpdateIcon}
/>

<TopCard
  icon={PaymentsIcon}
  title="Revenue"
  value="$1,345"
  color="text-green-500"
  status ="Last Day"
logo={CalendarTodayIcon}
/>

<TopCard
  icon={SevereColdIcon}
  title="Errors"
  value="23"
  color="text-red-500"
  status ="In Last Hour"
logo={AccessTimeIcon}
/>

      <TopCard
      icon={FavoriteBorderIcon}
      title="Followers"
      value="+45K"
      color="text-green-500"
      status ="Update Now"
      logo={UpdateIcon}
      >

      </TopCard>
    </div>
        <div>
          <UserBehavior></UserBehavior>
        </div>
        <div className='flex flex-row gap-2 flex-wrap'>
          <div><PieChartComponent></PieChartComponent></div>
          <div><LineChartComponent></LineChartComponent></div>
        </div>
    </div>
  )
}

export default DashboardPage
