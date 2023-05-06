import React, { useState } from 'react'
import MaterialTable from 'material-table'
import { ThemeProvider, createTheme } from '@mui/material';
import { Paper } from '@material-ui/core';



function BookedCars() {
  const defaultMaterialTheme = createTheme();
  const [tableData, setTableData] = useState([
    {
      id: "1", name: "Maruti Alto", brandName: "Toyota", number: "4326", model: "2020", image: "Car image is Available", status: "Pending"
    },
    {
      id: "2", name: "Civic", brandName: "Honda", number: "5432", model: "2021", image: "Car image is Available", status: "Cancel"
    },
    {
      id: "3", name: "City", brandName: "Honda", number: "7539", model: "2019", image: "Car image is Available", status: "Cancel"
    },
    {
      id: "4", name: "Amaze", brandName: "Suzuki", number: "8364", model: "2018", image: "Car image is Available", status: "Pending"
    },
  ])
  const columns = [
    {
      title: '#', field: 'id',
    },
    { title: 'Name', field: 'name', },
    { title: 'Brand Name', field: 'brandName', width: "25%" },
    { title: 'Number', field: 'number', width: "25%" },
    { title: 'Image', field: 'image', width: "25%" },
    { title: 'Status', field: 'status', width: "25%" },

  ]
  return (
    <div style={{ maxWidth: "100%" }}>
      <div className='px-2'>
        <div className="divider-line my-4">
          <span>
            Booking List
          </span>
        </div>
      </div>
      <ThemeProvider theme={defaultMaterialTheme}>
        <MaterialTable
          columns={columns}
          data={tableData}
          title=""
          options={{
            search: true,
            actionsColumnIndex: -1

          }}
          actions={[
            {
              icon: 'clear',
              tooltip: 'Cancel Booking',
              onClick: (event, rowData) => alert("You want delete " + rowData.name)
            },
          ]}
          components={{
            Container: props => <Paper {...props} elevation={0} />
          }}
        />
      </ThemeProvider>
    </div>
  );
}

export default BookedCars;
