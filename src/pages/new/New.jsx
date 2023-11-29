import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import Assets from "../../assests";
import './new.scss';

const New = ({inputs, title}) => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img 
              src={Assets.images.noItem} 
              alt="none"             
            />

          </div>
          <div className="right">
            <form action="">
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input type="file" id="file" style={{ display: "none"}} />
              </div>              

              {inputs.map((input) =>(
                <div className="formInput">
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div> 
              ))}      
              
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New;