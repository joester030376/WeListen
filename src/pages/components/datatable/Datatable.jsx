import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../../datatablesource';
import { Link } from 'react-router-dom';
import './datatable.scss';
import { useState } from 'react';

  export default function DataTable() {

    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {      
        setData(data.filter(item=>item.id !== id));
    };

    const actionColumn = [
      {field: "action", headerName: "Action", width: 200,
          renderCell: (params)=> {
              return (
                  <div className="cellAction">
                    <Link to="/users/test" style={{textDecoration: "none"}}>
                      <div className="viewButton">View</div>
                    </Link>
                    <Link style={{textDecoration: "none"}}>
                      <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</div>
                    </Link>
                  </div>
              )
          }        
      }
  ] 

    return (
      <div style={{ height: 600 }} className="datatable">
        <div className="datatableTitle">
          Add New 
          <Link to="/users/new"style={{textDecoration: "none"}} className='link'>
            Add New
          </Link>
        </div>
        <DataGrid
          className="rowdata"
          rows={data}
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