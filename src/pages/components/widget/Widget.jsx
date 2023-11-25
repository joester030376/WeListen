import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import "./widget.scss";

const Widget = ({ type }) => {

  let data;

  // Temporary values for money
  const amount = 100;
  const diff = 20;

    switch(type) {

      case "user":
        data = {
          title: "USERS",
          isMoney: false,
          link: "See all users",
          icon: <PersonOutlineIcon className="icon" 
                  style={{
                    color: "crimson",
                    backgroundColor: "rgba(255, 0, 0, 0.2)"
                  }} 
                />,
        };
        break;
        case "order":
        data = {
          title: "ORDERS",
          isMoney: false,
          link: "View all orders",
          icon: < ShoppingCartOutlinedIcon className="icon" 
                  style={{
                    color: "goldenrod",
                    backgroundColor: "rgba(245, 245, 154, 0.5)"
                  }}
                />,
        };
        break;
        case "earning":
        data = {
          title: "EARNINGS",
          isMoney: true,
          link: "View net earnings",
          icon: <MonetizationOnOutlinedIcon className="icon" 
                  style={{
                    color: "green",
                    backgroundColor: "rgba(154, 245, 160, 0.2)"
                  }}                
                />,
        };
        break;
        case "balance":
        data = {
          title: "BALANCE",
          isMoney: true,
          link: "See details",
          icon: <AccountBalanceWalletOutlinedIcon className="icon" 
                  style={{
                    color: "purple",
                    backgroundColor: "rgba(207, 98, 240, 0.2)"
                  }}
                />,
        };
        break;
        default:
          break;      
    }

  return (
    <div className="widget">
        <div className="left">
          <span className="title">{data.title}</span>
          <span className="counter">
            {data.isMoney && "$"} {amount}
          </span>
          <span className="link">{data.link}</span>


        </div>
        <div className="right">
          <div className="percentage positive">
            <KeyboardArrowUpIcon />
            {diff}%
          </div>
          {data.icon}
        </div>
    </div>
  )
}

export default Widget;
