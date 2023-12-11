import Typography from "@mui/material/Typography";
import {colorPresets} from "../../../../../colorpresets";
import './colorpresets.scss';

const ColorPresets = () => {
  return (
    <div className="colorPresets">
        <Typography fontSize="16px" fontWeight="500" letterSpacing="1px">
            Presets
        </Typography>
            <ul className="colorPresetList">
                {
                    colorPresets.map((color) => 
                        <li key={color.id} style="background-color:}`"></li>
                    )
                }
            </ul>
    </div>           
  )
}

export default ColorPresets;