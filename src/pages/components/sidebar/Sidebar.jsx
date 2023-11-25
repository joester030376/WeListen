import React from 'react'
import Avatar from '@mui/material/Avatar';
import Assets from '../../../assests';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import './sidebar.scss'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <Avatar 
                alt="Firehawk Digital" 
                src={Assets.images.logo} 
                sx={{
                    height: 54,
                    width: 54,
                    borderRadius: 5
                }}                
            />
            <div className='logo'>Firehawk Digital</div>   
        </div>
        <hr />   
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>
                <li>
                    <PersonOutlineIcon className='icon' />
                    <span>Users</span>
                </li>
                <li>
                    <StoreIcon className='icon'/>
                    <span>Products</span>
                </li>
                <li>
                    <CreditCardIcon className='icon' />
                    <span>Orders</span>
                </li> 
                <li>
                    <LocalShippingIcon className='icon' />
                    <span>Delivery</span>
                </li>  
                <p className="title">USEFUL</p>
                <li>
                    <AssessmentIcon className='icon' />
                    <span>Stats</span>
                </li> 
                <li>
                    <NotificationsNoneIcon className='icon'/>
                    <span>Notifications</span>
                </li> 
                <p className="title">SERVICE</p>
                <li>                
                    <SettingsSystemDaydreamOutlinedIcon className='icon'/>
                    <span>System Health</span>
                </li> 
                <li>
                    <ArticleOutlinedIcon className='icon'/>
                    <span>Logs</span>
                </li> 
                <li>
                    <SettingsOutlinedIcon className='icon'/>
                    <span>Settings</span>
                </li> 
                <p className="title">USER</p>
                <li>
                    <AccountCircleOutlinedIcon className='icon'/>
                    <span>Profile</span>
                </li> 
                <li>
                    <ExitToAppOutlinedIcon className='icon'/>
                    <span>Logout</span>
                </li> 
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>            
        </div>
    </div>
  )
}

export default Sidebar;