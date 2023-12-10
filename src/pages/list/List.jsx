import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import Settings from "../components/settings/Settings";
import './list.scss';
import DataTable from "../components/datatable/Datatable";

const Lists = () => {
  return (
    <div className="list">   
      <Sidebar />
      <div className="listContainer">
        <Navbar />
          <DataTable />
      </div>
      <Settings /> 
    </div>
  )
}

export default Lists;