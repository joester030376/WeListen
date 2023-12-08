import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
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
    </div>
  )
}

export default Lists;