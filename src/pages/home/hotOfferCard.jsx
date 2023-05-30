import { Row, Col, Container } from "react-bootstrap";
import ProductCard from "../../components/card/productCard";
import { useEffect, useState } from "react";
import { getApi } from "../../services/apiCaller.service";

function HotOfferCard() {
  const [carDataList, setCarDataList] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const res = await getApi({ url: `${process.env.REACT_APP_BASE_URL}/seller/cars` });
      setCarDataList(res.data.data)
    };
    getUser();
  }, [])

  const [filteredCars, setFilteredCars] = useState([]);

  const filterCars = (brandName) => {
    const filteredCars = carDataList.filter((car) => car.brandName.toLowerCase() === brandName);
    setFilteredCars(filteredCars);
  };

  const resetFilter = () => {
    setFilteredCars(carDataList);
  };

  return (
    <>
      <Row className="container-fluid">
        <Col className="mb-5 text-center">
          <ul className="offer-menu">
            <li>
              <button className="offer-links" onClick={resetFilter}>ALL BRANDS</button>
            </li>
            <li>
              <button className="offer-links" onClick={() => filterCars('toyota')} >TOYOTA</button>
            </li>
            <li>
              <button className="offer-links" onClick={() => filterCars('honda')}>HONDA</button>
            </li>
            <li>
              <button className="offer-links" onClick={() => filterCars('suzuki')}>SUZUKI</button>
            </li>
            <li>
              <button className="offer-links" onClick={() => filterCars('kia')}>KIA SPOTAGE</button>
            </li>
          </ul>
        </Col>
      </Row>
      <Container>
        <Row className="g-5 ">

          {filteredCars.slice(0, 6).map((element) => (
            <Col md={6} xl={4} className="d-flex justify-content-center">
              <ProductCard
                key={element.id}
                id={element.id}
                image={element.image}
                brandName={element.brandName}
                price={element.price}
                luggageCapacity={element.luggageCapacity}
                model={element.model}
                transmission={element.model}
                fuelAverage={element.fuelAverage}
              />
            </Col>

          ))
          }
        </Row>
      </Container>
    </>
  );
}

export default HotOfferCard;
