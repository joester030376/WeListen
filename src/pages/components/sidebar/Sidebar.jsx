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
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { Link } from 'react-router-dom';
import './sidebar.scss'
import { useContext } from 'react';
import { DarkModeContext } from '../../../context/darkModeContext';
import Assets from '../../../assests';
import Avatar from '@mui/material/Avatar';

const Sidebar = () => {
    
    const { darkMode } = useContext(DarkModeContext)
    const { dispatch } = useContext(DarkModeContext);
    
  return (
    <div className="sidebar">
              
        <div className="top">
            <Avatar 
                alt="avatar"
                src={!darkMode ? `${Assets.images.logoLight}` : `${Assets.images.logoDark}`}
                variant='rounded'
                sx={{
                    width: 56,
                    height: 56
                }}
            >
            </Avatar>
        </div>
        <hr />   
        <div className="center">
            <ul>
                <p className="title">DASHBOARD</p>
                <Link to="/" style={{textDecoration: "none"}}>
                    <li>
                        <DashboardIcon className='icon'/>
                        <span>Dashboard</span>
                    </li>   
                </Link>
                <p className="title">APPLICATION</p>
                <Link to="/users" style={{textDecoration: "none"}}>
                    <li>
                        <PersonOutlineIcon className='icon' />
                        <span>Users</span>
                    </li>
                </Link>
                <Link to="/clients" style={{textDecoration: "none"}}>
                    <li>
                        <StoreIcon className='icon'/>
                        <span>Clients</span>
                    </li>                        
                </Link>
                    <li>
                        <ChatBubbleOutlineOutlinedIcon className='icon' />
                        <span>Chat</span>
                    </li>
                <Link to="/orders" style={{textDecoration: "none"}}>
                    <li>
                        <CreditCardIcon className='icon' />
                        <span>Orders</span>
                    </li> 
                </Link>
                <li>
                    <LocalShippingIcon className='icon' />
                    <span>Delivery</span>
                </li>  
                <p className="title">ADMINSITRATION</p>
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
            <div className="colorOption" 
                onClick={() => dispatch({type:"LIGHT"})}>
            </div>
            <div className="colorOption" 
                onClick={() => dispatch({type:"DARK"})}>
            </div>            
        </div>
    </div>
  )
}

export default Sidebar;