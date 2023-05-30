import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApi } from "../../../services/apiCaller.service";
import { Col, Row } from "react-bootstrap";
import './rented.css'



function ViewRentedCar() {

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
        <div className="p-3">
            <Row >
                <Col lg={6}>
                    <div className='view-car-image border-primary-2 shadow-2 rounded p-1'>
                        <img className='' src={carData.image} />
                    </div>
                </Col>
                <Col lg={6}>
                    <Row className="ps-1 pe-2 pt-3 bg-white border-primary-2 shadow-2 rounded">
                        <Col sm={12} className="mb-4">
                            <div className='d-flex justify-content-between'>
                                <span className='text-secondary fw-bold'>Deliver Date</span>
                                <span>12-01-2023</span>
                            </div>
                        </Col>
                        <Col sm={12} className="my-4">
                            <div className='d-flex justify-content-between'>
                                <span className='text-secondary fw-bold'>Deliver Time</span>
                                <span>12:00pm</span>
                            </div>
                        </Col>
                        <Col sm={12} className="my-4">
                            <div className='d-flex justify-content-between'>
                                <span className='text-secondary fw-bold'>Deliver Location</span>
                                <span>Street1 12,HHA phase 5</span>
                            </div>
                        </Col>
                        <Col sm={12} className="my-4">
                            <div className='d-flex justify-content-between'>
                                <span className='text-secondary fw-bold'>Booking Status</span>
                                <span>Booked</span>
                            </div>
                        </Col>
                        <Col sm={12} className="my-4">
                            <div className='d-flex justify-content-between'>
                                <span className='text-secondary fw-bold'>Days</span>
                                <span>5</span>
                            </div>
                        </Col>
                        <Col sm={12} className="my-4">
                            <div className='d-flex justify-content-between'>
                                <span className='text-secondary fw-bold'>Rent</span>
                                <span>25000</span>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row >
            <Row className="mt-5">
                <Col sm={6} className="border-primary-2 rounded shadow-2 px-3 pt-4">
                    <Col>
                        <h5 className="fw-bold">Drop Off</h5>
                    </Col>
                    <Col sm={12} className="my-5">
                        <div className='d-flex justify-content-between'>
                            <span className='text-secondary fw-bold'>Date</span>
                            <span>12-01-2023</span>
                        </div>
                    </Col>
                    <Col sm={12} className="my-5">
                        <div className='d-flex justify-content-between'>
                            <span className='text-secondary fw-bold'>Time</span>
                            <span>12:00pm</span>
                        </div>
                    </Col>
                    <Col sm={12} className="mt-5 mb-4">
                        <div className='d-flex justify-content-between'>
                            <span className='text-secondary fw-bold'>Location</span>
                            <span>Street1 12,HHA phase 5</span>
                        </div>
                    </Col>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <h5 className="fw-bold">Other Details</h5>
                </Col>
            </Row>
            <Row>
                <Col sm={6} className="mb-4 mt-2">
                    <div className='d-flex justify-content-between border-primary-2  p-3 mb-2 rounded'>
                        <span className='text-secondary fw-bold'>payment Status</span>
                        <span className="car-list-pro-2">None</span>
                    </div>
                </Col>
                <Col sm={12} className="my-4">
                    <div className="d-flex w-50">
                        <button className="mx-3 btn-1">Payment</button>
                        <button className="mx-3 btn-1">Cancel Booking</button>
                    </div>
                </Col>
            </Row>
        </div >

    )
}

export default ViewRentedCar;