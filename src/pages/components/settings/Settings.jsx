import React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import './settings.scss';

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
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <form action="">
        <div className="settingsHeader">
            <div>
                <h1>Settings</h1>
            </div>
            <div>
                
            </div>
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
                        sx: {width: "400px"}
                    }}               
                    BackdropProps={{ invisible: true }}
                    anchor={"right"}
                    open={state["right"]}
                    onClose={toggleDrawer("right", false)}
                >
                    {item("right")}
                </Drawer>
        </React.Fragment>
    </div>
  );
}

export default Settings;