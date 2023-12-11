import Typography from "@mui/material/Typography";
import 
import './colorpresets.scss';

const ColorPresets = () => {
  return (
    <div className="colorPresets">
        <Typography fontSize="16px" fontWeight="500" letterSpacing="1px">
            Presets
        </Typography>
            <ul className="colorPresetList">
                <li className="colorPreset"><div className="default"></div></li>
                <li ><div className="green"></div></li>
                <li><div className="red"></div></li>
                <li><div className="purple"></div></li>
                <li><div className="cyan"></div></li>
                <li><div className="orange"></div></li>
            </ul>
    </div>           
  )
}

export default ColorPresets;