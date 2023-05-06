
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { getApi } from "../../services/apiCaller.service";
import { useParams } from 'react-router-dom';
import {
    faCalendar,
    faClock,
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";


export default function BookCar() {
    const params = useParams();
    const [carData, setCarData] = useState({});
    useEffect(() => {
        const getCar = async () => {
            const res = await getApi({ url: `${process.env.REACT_APP_BASE_URL}/seller/show/${params['id']}` });
            setCarData(res.data.data);
        };

        getCar();
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            <Container>
                <Row className="my-5  p-3 mb-5 bg-white rounded border">
                    <Col lg={5}>
                        <Image
                            className="w-100 my-2"
                            src={carData.image}
                        ></Image>
                    </Col>
                    <Col lg={7}>
                        <div className="my-2" style={{ marginLeft: "170px" }}>
                            <ul className="d-flex fs-2 fw-bold ">
                                <li className="mx-4">Rate</li>
                                <li className="mx-4">No. of days</li>
                                <li className="mx-4">Amount</li>
                            </ul>
                        </div>
                        <div className="mx-5">
                            <ul className="fw-bold fs-2 ">
                                <li className="border-bottom"></li>
                                <li className="my-3 border-bottom ">
                                    Rental
                                    <span
                                        className="fs-2 text-lightGray"
                                        style={{ marginLeft: "65px" }}
                                    >
                                        {carData.price}/day
                                    </span>
                                    <span
                                        className="fs-2  text-lightGray"
                                        style={{ marginLeft: "65px" }}
                                    >
                                        3
                                    </span>
                                    <span
                                        className="fs-2  text-lightGray"
                                        style={{ marginLeft: "110px" }}
                                    >
                                        22,500
                                    </span>
                                </li>
                                <li className="my-3 border-bottom">
                                    Base Fare
                                    <span
                                        className="fs-2 text-lightGray"
                                        style={{ marginLeft: "320px" }}
                                    >
                                        225
                                    </span>
                                </li>
                                <li className="my-3 border-bottom">
                                    Fuel
                                    <span
                                        className="fs-2 text-lightGray"
                                        style={{ marginLeft: "100px" }}
                                    >
                                        {carData.fuelAverage}/Km
                                    </span>
                                </li>
                                <li className="my-3 border-bottom">
                                    Over Time
                                    <span
                                        className="fs-2 text-lightGray"
                                        style={{ marginLeft: "40px" }}
                                    >
                                        350/hour
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <div style={{ marginTop: "70px" }}>
                            <h5 className="fw-bold my-5 text-primary" >
                                Pick-Up & drop-off detailed
                            </h5>
                        </div>
                        <h5 className="fw-bold" style={{ marginLeft: "80px" }}>

                            Pick-Up detail
                        </h5>
                        <div className="my-4 border  p-3 mb-2 bg-white rounded">
                            <span>
                                <FontAwesomeIcon
                                    className="fs-3 mx-3 text-secondary"
                                    icon={faLocationDot}
                                ></FontAwesomeIcon>
                                Alma Iqbal International Airport, Cant, Lahore, Pakistan
                            </span>
                        </div>
                        <div className="my-1 border  p-3 mb-2 bg-white rounded">
                            <span>
                                <FontAwesomeIcon
                                    className="fs-3 mx-3 text-secondary"
                                    icon={faClock}
                                ></FontAwesomeIcon>
                                12:00 PM
                            </span>
                        </div>
                        <div className="my-1 border  p-3 mb-2 bg-white rounded">
                            <span>
                                <FontAwesomeIcon
                                    className="fs-3 mx-3 text-secondary"
                                    icon={faCalendar}
                                ></FontAwesomeIcon>
                                13th February, 2023
                            </span>
                        </div>

                        <h5 className="fw-bold my-3" style={{ marginLeft: "80px" }}>

                            Drop-Off datail
                        </h5>
                        <div className="my-4 border  p-3 mb-2 bg-white rounded">
                            <span>
                                <FontAwesomeIcon
                                    className="fs-3 mx-3 text-secondary"
                                    icon={faLocationDot}
                                ></FontAwesomeIcon>
                                high cot society PIA road johar town lahore
                            </span>
                        </div>
                        <div className="my-1 border  p-3 mb-2 bg-white rounded">
                            <span>
                                <FontAwesomeIcon
                                    className="fs-3 mx-3 text-secondary"
                                    icon={faClock}
                                ></FontAwesomeIcon>
                                2:00 PM
                            </span>
                        </div>
                        <div className="my-1 border  p-3 mb-2 bg-white rounded">
                            <span>
                                <FontAwesomeIcon
                                    className="fs-3 mx-3 text-secondary"
                                    icon={faCalendar}
                                ></FontAwesomeIcon>
                                15th February, 2023
                            </span>
                        </div>
                    </Col>

                </Row>


            </Container>
        </div>

    );
}
