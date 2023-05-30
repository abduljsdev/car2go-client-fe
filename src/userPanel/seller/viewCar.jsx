import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import './seller.css'
import { getApi } from '../../services/apiCaller.service';

function ViewCar() {
    const navigate = useNavigate();
    const [carData, setCarData] = useState({});
    const params = useParams();
    const id = params.id;
    useEffect(() => {
        const getCar = async () => {
            const res = await getApi({ url: `${process.env.REACT_APP_BASE_URL}/seller/car/${id}` });
            const data = res.data.data;
            setCarData(data);
        };


        getCar();
        // eslint-disable-next-line
    }, [])

    return (
        <div className='px-5'>
            <div className='pt-5 view-car-image'>
                <img className='' src={carData.image} />
            </div>
            <div>
                <h3 className='my-5'>Details</h3>
                <Row>
                    <Col md={6} lg={4} className="my-4">
                        <div className='d-flex justify-content-between border-primary  p-3 mb-2 bg-white rounded'>
                            <span className='text-secondary fw-bold'>Name</span>
                            <span className="car-list-pro-1">{carData.name}</span>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="my-4">
                        <div className='d-flex justify-content-between border-primary  p-3 mb-2 bg-white rounded'>
                            <span className='text-secondary fw-bold'>BrandName</span>
                            <span className="car-list-pro-1">{carData.brandName}</span>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="my-4">
                        <div className='d-flex justify-content-between border-primary  p-3 mb-2 bg-white rounded'>
                            <span className='text-secondary fw-bold'>Model</span>
                            <span className="car-list-pro-1">{carData.model}</span>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="my-4">
                        <div className='d-flex justify-content-between border-primary  p-3 mb-2 bg-white rounded'>
                            <span className='text-secondary fw-bold'>Number</span>
                            <span className="car-list-pro-1">{carData.number}</span>
                        </div>

                    </Col>
                    <Col md={6} lg={4} className="my-4">
                        <div className='d-flex justify-content-between border-primary  p-3 mb-2 bg-white rounded'>
                            <span className='text-secondary fw-bold'>Transmission</span>
                            <span className="car-list-pro-1">{carData.transmission === true ? "Yes" : "No"}</span>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="my-4">
                        <div className='d-flex justify-content-between border-primary  p-3 mb-2 bg-white rounded'>
                            <span className='text-secondary fw-bold'>Price</span>
                            <span className="car-list-pro-1">{carData.price}</span>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="my-4">
                        <div className='d-flex justify-content-between border-primary  p-3 mb-2 bg-white rounded'>
                            <span className='text-secondary fw-bold'>Seats</span>
                            <span className="car-list-pro-1">{carData.seats}</span>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="my-4">
                        <div className='d-flex justify-content-between border-primary  p-3 mb-2 bg-white rounded'>
                            <span className='text-secondary fw-bold'>Fuel Average</span>
                            <span className="car-list-pro-1">{carData.fuelAverage}</span>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="my-4">
                        <div className='d-flex justify-content-between border-primary  p-3 mb-2 bg-white rounded'>
                            <span className='text-secondary fw-bold'>Doors</span>
                            <span className="car-list-pro-1">{carData.doors}</span>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="my-4">
                        <div className='d-flex justify-content-between border-primary  p-3 mb-2 bg-white rounded'>
                            <span className='text-secondary fw-bold'>Air Condition</span>
                            <span className="car-list-pro-1">{carData.airCondition === true ? "Yes" : "No"}</span>
                        </div>

                    </Col>
                    <Col md={6} lg={4} className="my-4">
                        <div className='d-flex justify-content-between border-primary  p-3 mb-2 bg-white rounded'>
                            <span className='text-secondary fw-bold'>Category</span>
                            <span className="car-list-pro-1">{carData.category}</span>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="my-4">
                        <div className='d-flex justify-content-between border-primary  p-3 mb-2 bg-white rounded'>
                            <span className='text-secondary fw-bold'> Passenger capacity</span>
                            <span className="car-list-pro-1">{carData.passengerCapacity}</span>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default ViewCar;