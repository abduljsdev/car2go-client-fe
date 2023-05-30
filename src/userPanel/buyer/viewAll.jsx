import React, { useEffect, useState } from 'react'
import MaterialTable from 'material-table'
import { ThemeProvider, createTheme } from '@mui/material';
import { Paper } from '@material-ui/core';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import { getApi } from '../../services/apiCaller.service';


function BookedCars() {
    const [carData, setCarData] = useState([]);
    const defaultMaterialTheme = createTheme();
    const navigate = useNavigate();


    function deleteHandle(id) {
        navigate(`../view-booked-car/${id}`)
    }

    useEffect(() => {
        const getCars = async () => {
            const res = await getApi({ url: `${process.env.REACT_APP_BASE_URL}/booking/all-data` });
            const data = res.data.data;
            setCarData(data);
        };

        getCars();
    }, [])
    const columns = [
        {
            title: '#', field: 'id', cellStyle: { width: "5%" },
            width: "5%",
            headerStyle: { width: "5%" }
        },
        {
            title: 'Image', field: 'image', cellStyle: { width: "20%  " },
            width: "20%",
            headerStyle: { width: "20%" },
            render: rowData => <img src={rowData.car.image} style={{ width: 80, height: 50, borderRadius: 5 }} />
        },
        {
            title: 'Name', field: 'name', cellStyle: { width: "20%" },
            width: "20%",
            headerStyle: { width: "20%" },
            render: rowData => rowData.car.name
        },
        {
            title: 'Brand Name', field: 'brandName', cellStyle: { width: "20%" },
            width: "20%",
            headerStyle: { width: "20%" },
            render: rowData => rowData.car.brandName
        },
        {
            title: 'Number', field: 'number', cellStyle: { width: "20%" },
            width: "20%",
            headerStyle: { width: "20%" },
            render: rowData => rowData.car.number
        },
        {
            title: 'Model', field: 'model', cellStyle: { width: "5%" },
            width: "5%",
            headerStyle: { width: "5%" },
            render: rowData => rowData.car.model
        },
        {
            title: 'Action', field: 'action', cellStyle: { width: "20%" },
            width: "20%",
            headerStyle: { width: "20%" },
            render: rowData => {
                return <FontAwesomeIcon icon={faCompass} onClick={() => deleteHandle(rowData.id)} style={{ fontSize: 25, cursor: "pointer" }} />
            }
        },
    ]
    if (carData.length > 0) {
        return (
            <div style={{ maxWidth: "100%" }}>
                <div className='px-2'>
                    <div className="divider-line my-4">
                        <span>
                            All List
                        </span>
                    </div>
                </div>
                <ThemeProvider theme={defaultMaterialTheme}>
                    <MaterialTable
                        columns={columns}
                        data={carData}
                        title=""
                        options={{
                            search: true,
                            actionsColumnIndex: -1,
                            doubleHorizontalScroll: true,
                            cellStyle: { borderRight: '1px solid #eee' }

                        }}
                        components={{
                            Container: props => <Paper {...props} elevation={0} />
                        }}
                    />
                </ThemeProvider>
            </div>
        );
    }
}

export default BookedCars;

