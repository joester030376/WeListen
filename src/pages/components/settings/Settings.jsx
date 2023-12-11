import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import './settings.scss';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ColorPresets from "./components/colorpresets/ColorPresets";

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
              <Typography fontSize="24px" fontWeight="700" letterSpacing="1px">
                  Settings        
              </Typography>   
              <Stack direction="row" alignItems="center" gap={1} justifyContent="fle">  
                               
                  <Tooltip title="Reset">
                      <RestartAltOutlinedIcon className="links" />     
                  </Tooltip>        
                  <Tooltip title="Close">
                      <CloseOutlinedIcon className="links"
                          onClick={toggleDrawer('right', false)}  
                      />            
                  </Tooltip>      
              </Stack>                
           </div>
           <Divider 
              sx={{
                marginTop: "10px"
              }}
           />  
           <ColorPresets />         
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