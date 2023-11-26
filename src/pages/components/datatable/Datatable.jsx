import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../../datatablesource';
import './datatable.scss';

const actionColumn = [
    {field: "action", headerName: "Action", width: 200,
        renderCell: ()=> {
            return (
                <div className="cellAction">
                    <div className="viewButton">View</div>
                    <div className="deleteButton">Delete</div>
                </div>
            )
        }        
    }
] 
  
  export default function DataTable() {
    return (
      <div style={{ height: 600, width: '100%' }} className="datatable">
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