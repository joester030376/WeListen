import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../../datatablesource';
import { Link } from 'react-router-dom';
import './datatable.scss';

const actionColumn = [
    {field: "action", headerName: "Action", width: 200,
        renderCell: ()=> {
            return (
                <div className="cellAction">
                  <Link to="/users/test"style={{textDecoration: "none"}}>
                    <div className="viewButton">View</div>
                  </Link>
                  <Link to="/"style={{textDecoration: "none"}}>
                    <div className="deleteButton">Delete</div>
                  </Link>
                </div>
            )
        }        
    }
] 
  
  export default function DataTable() {
    return (
      <div style={{ height: 600 }} className="datatable">
        <div className="datatableTitle">
          Add New 
          <Link to="/users/new"style={{textDecoration: "none"}} className='link'>
            Add New
          </Link>
        </div>
        <DataGrid
          rows={userRows}
          columns={userColumns.concat(actionColumn)}
          autoPageSize
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    );
  }