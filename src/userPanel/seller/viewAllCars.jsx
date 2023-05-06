import React, { useEffect, useState } from 'react'
import MaterialTable from 'material-table'
import { ThemeProvider, createTheme } from '@mui/material';
import { Paper } from '@material-ui/core';
import { deleteApi, getApi } from '../../services/apiCaller.service';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from '@fortawesome/free-solid-svg-icons';


function ViewAllCars() {
    const navigate = useNavigate();
    const [carData, setCarData] = useState([]);
    const defaultMaterialTheme = createTheme();
    const [deleteCounter, setDeleteCounter] = useState(0);
    const [counter, setCounter] = useState(0);
    const [deleteCarId, setDeleteCarId] = useState(null);
    function deleteHandle(id) {
        console.log(id);
        alert("Car data is deleted");
        setDeleteCarId(id);
        setDeleteCounter(deleteCounter + 1);
        console.log('11111111111111');

    }
    useEffect(() => {
        const deleteCar = async () => {
            const res = await deleteApi({ url: `${process.env.REACT_APP_BASE_URL}/seller/car/${deleteCarId}` });
            setCounter(counter + 1);
        };
        deleteCar()
        // eslint-disable-next-line
    }, [deleteCounter])
    useEffect(() => {
        const getCars = async () => {
            const res = await getApi({ url: `${process.env.REACT_APP_BASE_URL}/seller/car-list` });
            const data = await res.data.data;
            setCarData(data);
        };

        getCars();
        // eslint-disable-next-line
    }, [counter])
    const columns = [
        {
            title: '#', field: 'id', cellStyle: { width: "5%" },
            width: "5%",
            headerStyle: { width: "5%" }
        },
        {
            title: 'Name', field: 'name', cellStyle: { width: "20%" },
            width: "20%",
            headerStyle: { width: "20%" }
        },
        {
            title: 'Brand Name', field: 'brandName', cellStyle: { width: "20%" },
            width: "20%",
            headerStyle: { width: "20%" }
        },
        {
            title: 'Number', field: 'number', cellStyle: { width: "20%" },
            width: "20%",
            headerStyle: { width: "20%" }
        },
        {
            title: 'Model', field: 'model', cellStyle: { width: "20" },
            width: "20%",
            headerStyle: { width: "20%" }
        },]
    if (carData) {
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
                        actions={[
                            {
                                icon: () => <FontAwesomeIcon icon={faCompass} />,
                                tooltip: 'View Detail',
                                onClick: (event, rowData) => { navigate(`../edit-car/${rowData.id}`) }

                            },
                            {
                                icon: 'delete',
                                tooltip: 'Delete Car',
                                onClick: (event, rowData) => { deleteHandle(rowData.id) },


                            },
                            {
                                icon: 'edit',
                                tooltip: 'Edit Car',
                                onClick: (event, rowData) => { navigate(`../edit-car/${rowData.id}`) }
                            }
                        ]}
                        components={{
                            Container: props => <Paper {...props} elevation={0} />
                        }}
                    />
                </ThemeProvider>
            </div>
        );
    }
}

export default ViewAllCars;
