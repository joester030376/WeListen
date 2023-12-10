import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Stack from "@mui/material/Stack";
import './settings.scss';
import Typography from "@mui/material/Typography";
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import Divider from "@mui/material/Divider";

const Settings = () => {
  
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const item = (anchor) => (
    <div
      className={anchor}
      role="presentation"
      //onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <form action="">
        <div className="settingsMenu">
           <div className="settingsHeader">             
                Settings
              <div className="headerIcons">
                <div className="links"><RestartAltOutlinedIcon /></div>
                <div className="links">
                  <CloseOutlinedIcon 
                    onClick={toggleDrawer('right', false)}  
                  />
                  </div>
              </div>                           
           </div>
           <Divider 
              sx={{
                marginTop: "10px"
              }}
           />
        </div>
      </form>
    </div>
  );

  return (
    <div className="settings">
        <React.Fragment>
            <Button onClick={toggleDrawer("right", true)}><MenuOpenIcon className="icon" /></Button>
                <Drawer     
                    PaperProps={{
                        sx: {width: "350px"}
                    }}               
                    hideBackdrop
                    anchor={"right"}
                    open={state["right"]}
                    //onClose={toggleDrawer("right", false)}
                >
                    {item("right")}
                </Drawer>
        </React.Fragment>
    </div>
  );
}

export default Settings;