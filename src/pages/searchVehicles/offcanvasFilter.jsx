import { faBars, faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./vehicles.css"


export default function OffcanvasFilter() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="vehicles-offcanvas-filter">
            <div className='py-3  filter-icon'>
                <FontAwesomeIcon
                    className="me-2 fs-3"
                    icon={faCodeCompare}
                    onClick={handleShow} style={{ cursor: "pointer" }}>
                </FontAwesomeIcon>
                <span className='fs-5 fw-bold'>Filter</span>
            </div>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton />
                <Offcanvas.Body>
                    <div className="offcanvas-body-section">
                        <div className="d-flex justify-content-between pt-4 mx-2 border-bottom ">
                            <h3 className="fs-4 fw-bold">Filter</h3>
                            <p className=" filter text-secondary fw-bold" >
                                Clear all filters
                            </p>
                        </div>

                        <div className="border-bottom mx-3 my-3">
                            <p className="text-secondary fw-bold">Price per day</p>
                            <p>
                                <span className="mx-2">
                                    <input type="checkbox" className="filter-checkbox" />
                                </span>
                                5000 - 7000
                            </p>
                        </div>

                        <div className="border-bottom mx-3 my-3">
                            <p className="text-secondary fw-bold">Car Specification</p>
                            <p>
                                <span className="mx-2">
                                    <input type="checkbox" className="filter-checkbox" />
                                </span>
                                Air condition
                            </p>
                            <p >
                                <span className="mx-2">
                                    <input type="checkbox" className="filter-checkbox" />
                                </span>
                                4+ doors
                            </p>
                        </div>

                        <div className="border-bottom mx-3 my-3">
                            <p className="text-secondary fw-bold">Transmission</p>
                            <p>
                                <span className="mx-2">
                                    <input type="checkbox" className="filter-checkbox" />
                                </span>
                                Automatic
                            </p>
                            <p>
                                <span className="mx-2">
                                    <input type="checkbox" className="filter-checkbox" />
                                </span>
                                Manual
                            </p>
                        </div>

                        <div className="mx-3 my-3">
                            <p className=" text-secondary fw-bold">Car category</p>
                            <p>
                                <span className="mx-2">
                                    <input type="checkbox" className="filter-checkbox" />
                                </span>
                                Small
                            </p>

                            <p>
                                <span className="mx-2">
                                    <input type="checkbox" className="filter-checkbox" />
                                </span>
                                SUVs
                            </p>

                            <p>
                                <span className="mx-2">
                                    <input type="checkbox" className="filter-checkbox" />
                                </span>
                                VANs
                            </p>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}
