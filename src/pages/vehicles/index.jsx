import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { getApi } from "../../services/apiCaller.service";
import { setVehicles } from "../../store/vehiclesSlice";
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import ProductCard2 from './../../components/card/productCard2';
import Offcanvas from 'react-bootstrap/Offcanvas';
import BookingForm from "./bookingForm";
import "./vehicles.css"


function Vehicles() {
  const dispatch = useDispatch();
  const [carDataList, setCarDataList] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const getUser = async () => {
      const res = await getApi({ url: `${process.env.REACT_APP_BASE_URL}/seller/cars` });
      setCarDataList(res.data.data)
      dispatch(setVehicles(res.data.data));
    };
    getUser();
  }, [])


  const [filters, setFilters] = useState({
    price1: false,
    price2: false,
    price3: false,
    airCondition: false,
    auto: false,
    manual: false,
    micro: false,
    hatchback: false,
    sedan: false,
    suv: false,
    van: false
  });

  const handleFilterChange = (event) => {
    const { name, checked } = event.target;
    setFilters({ ...filters, [name]: checked });
  };

  const filteredData = carDataList.filter((item) => {
    return (
      (!filters.price1 || (item.price > 4999 && item.price <= 7000)) &&
      (!filters.price2 || (item.price >= 7001 && item.price <= 10000)) &&
      (!filters.price3 || (item.price >= 10001 && item.price <= 30000)) &&
      (!filters.auto || item.transmission === "AUTO") &&
      (!filters.manual || item.transmission === "MANUAL") &&
      (!filters.micro || item.category === 'MICRO') &&
      (!filters.hatchback || item.category === 'HATCHBACK') &&
      (!filters.sedan || item.category === 'SEDAN') &&
      (!filters.suv || item.category === 'SUV') &&
      (!filters.van || item.category === 'VAN')
    );
  });
  return (
    <div>
      <div>
        <BookingForm />
      </div>
      <div className="vehicles-section container">
        <Row>
          <Col lg={4}>
            <Container className="vehicles-filter my-5">
              <div
                className="rounded">
                <div className="d-flex justify-content-between pt-4 mx-2 border-bottom ">
                  <h5 className="fw-bold">Filter</h5>
                  <p className=" filter text-secondary fw-bold" >
                    Clear all filters
                  </p>
                </div>

                <div className="border-bottom mx-3 my-3">
                  <p className="text-secondary fw-bold">Price per day</p>
                  <p>
                    <span className="mx-2">
                      <input name="price1" type="checkbox" checked={filters.price1}
                        onChange={handleFilterChange} className="filter-checkbox" />
                    </span>
                    5000 - 7000
                  </p>
                  <p>
                    <span className="mx-2">
                      <input name="price2" checked={filters.price2} type="checkbox" onChange={handleFilterChange} className="filter-checkbox" />
                    </span>
                    7000 - 10000
                  </p>
                  <p>
                    <span className="mx-2">
                      <input name="price3" type="checkbox" checked={filters.price3} onChange={handleFilterChange} className="filter-checkbox" />
                    </span>
                    10000 - 30000
                  </p>
                </div>

                <div className="border-bottom mx-3 my-3">
                  <p className="text-secondary fw-bold">Transmission</p>
                  <p>
                    <span className="mx-2">
                      <input name="auto" type="checkbox" checked={filters.auto}
                        onChange={handleFilterChange} className="filter-checkbox" />
                    </span>
                    Auto
                  </p>
                  <p>
                    <span className="mx-2">
                      <input name="manual" type="checkbox" checked={filters.manual}
                        onChange={handleFilterChange}
                        className="filter-checkbox" />
                    </span>
                    Manual
                  </p>
                </div>

                <div className="mx-3 my-3">
                  <p className=" text-secondary fw-bold">Car category</p>
                  <p>
                    <span className="mx-2">
                      <input name="micro" type="checkbox" checked={filters.micro}
                        onChange={handleFilterChange} className="filter-checkbox" />
                    </span>
                    Micro
                  </p>

                  <p>
                    <span className="mx-2">
                      <input name="hatchback" type="checkbox" checked={filters.hatchback}
                        onChange={handleFilterChange} className="filter-checkbox" />
                    </span>
                    Hatchback
                  </p>
                  <p>
                    <span className="mx-2">
                      <input name="sedan" type="checkbox" checked={filters.sedan}
                        onChange={handleFilterChange} className="filter-checkbox" />
                    </span>
                    Sedan
                  </p>
                  <p>
                    <span className="mx-2">
                      <input name="suv" type="checkbox" checked={filters.suv}
                        onChange={handleFilterChange} className="filter-checkbox" />
                    </span>
                    SUV
                  </p>

                  <p>
                    <span className="mx-2">
                      <input name="van" type="checkbox" checked={filters.van}
                        onChange={handleFilterChange} className="filter-checkbox" />
                    </span>
                    VAN
                  </p>
                </div>
              </div>
            </Container>
            <div className="offcanvas-filter-section">
              <div className="vehicles-offcanvas-filter ">
                <div className='py-2 filter-icon'>
                  <FontAwesomeIcon
                    className="me-2 fs-2"
                    icon={faCodeCompare}
                    onClick={handleShow} style={{ cursor: "pointer" }}>
                  </FontAwesomeIcon>
                  <span className='fs-2 fw-bold'>Filter</span>
                </div>
                <Offcanvas show={show} onHide={handleClose}>
                  <Offcanvas.Header closeButton />
                  <Offcanvas.Body>
                    <div className="offcanvas-body-section">
                      <div
                        className="rounded">
                        <div className="d-flex justify-content-between pt-4 mx-2 border-bottom ">
                          <h3 className="fw-bold">Filter</h3>
                          <p className=" filter text-secondary fw-bold" >
                            Clear all filters
                          </p>
                        </div>

                        <div className="border-bottom mx-3 my-3">
                          <p className="text-secondary fw-bold">Price per day</p>
                          <p>
                            <span className="mx-2">
                              <input name="price1" type="checkbox" checked={filters.price1}
                                onChange={handleFilterChange} className="filter-checkbox" />
                            </span>
                            5000 - 7000
                          </p>
                          <p>
                            <span className="mx-2">
                              <input name="price2" checked={filters.price2} type="checkbox" onChange={handleFilterChange} className="filter-checkbox" />
                            </span>
                            7000 - 10000
                          </p>
                          <p>
                            <span className="mx-2">
                              <input name="price3" type="checkbox" checked={filters.price3} onChange={handleFilterChange} className="filter-checkbox" />
                            </span>
                            10000 - 30000
                          </p>
                        </div>

                        <div className="border-bottom mx-3 my-3">
                          <p className="text-secondary fw-bold">Car Specification</p>
                          <p>
                            <span className="mx-2">
                              <input name="airCondition" type="checkbox" checked={filters.airCondition}
                                onChange={handleFilterChange} className="filter-checkbox" />
                            </span>
                            Air condition
                          </p>
                        </div>

                        <div className="border-bottom mx-3 my-3">
                          <p className="text-secondary fw-bold">Transmission</p>
                          <p>
                            <span className="mx-2">
                              <input name="auto" type="checkbox" checked={filters.auto}
                                onChange={handleFilterChange} className="filter-checkbox" />
                            </span>
                            Auto
                          </p>
                          <p>
                            <span className="mx-2">
                              <input name="manual" type="checkbox" checked={filters.manual}
                                onChange={handleFilterChange}
                                className="filter-checkbox" />
                            </span>
                            Manual
                          </p>
                        </div>

                        <div className="mx-3 my-3">
                          <p className=" text-secondary fw-bold">Car category</p>
                          <p>
                            <span className="mx-2">
                              <input name="micro" type="checkbox" checked={filters.micro}
                                onChange={handleFilterChange} className="filter-checkbox" />
                            </span>
                            Micro
                          </p>

                          <p>
                            <span className="mx-2">
                              <input name="hatchback" type="checkbox" checked={filters.hatchback}
                                onChange={handleFilterChange} className="filter-checkbox" />
                            </span>
                            Hatchback
                          </p>
                          <p>
                            <span className="mx-2">
                              <input name="sedan" type="checkbox" checked={filters.sedan}
                                onChange={handleFilterChange} className="filter-checkbox" />
                            </span>
                            Sedan
                          </p>
                          <p>
                            <span className="mx-2">
                              <input name="suv" type="checkbox" checked={filters.suv}
                                onChange={handleFilterChange} className="filter-checkbox" />
                            </span>
                            SUV
                          </p>

                          <p>
                            <span className="mx-2">
                              <input name="van" type="checkbox" checked={filters.van}
                                onChange={handleFilterChange} className="filter-checkbox" />
                            </span>
                            VAN
                          </p>
                        </div>
                      </div>
                    </div>
                  </Offcanvas.Body>
                </Offcanvas>
              </div>















            </div>
          </Col>
          <Col lg={8}>
            <div className="vehicles-list-section">
              {filteredData.map((element) => (
                <ProductCard2
                  key={element.id}
                  id={element.id}
                  image={element.image}
                  name={element.name}
                  seats={element.seats}
                  bag={element.luggageCapacity}
                  category={element.category}
                  transmission="Manual"
                  smallBag={element.luggageCapacity}
                  fuelAverage={element.fuelAverage}
                  price={element.price}
                />
              ))

              }
            </div>

          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Vehicles;


