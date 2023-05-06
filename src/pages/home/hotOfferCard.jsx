import { Row, Col, Container } from "react-bootstrap";
import ProductCard from "../../components/card/productCard";
function HotOfferCard() {
  return (
    <Container>
      <Row className="g-5">
        <Col md={6} xl={4} className="d-flex justify-content-center">
          <ProductCard
            path="/images/productCards/card-image-1.png"
            brand="Toyota Alphard"
            rentPrice="50.00"
            model="2018"
            driveType="Automatic"
            fuel="14"
          />
        </Col>
        <Col md={6} xl={4} className="d-flex justify-content-center">
          <ProductCard
            path="/images/productCards/card-image-2.png"
            brand="Kia Sportage"
            rentPrice="60.00"
            model="2022"
            driveType="Automatic"
            fuel="12"
          />
        </Col>
        <Col md={6} xl={4} className="d-flex justify-content-center">
          <ProductCard
            path="/images/productCards/card-image-3.png"
            brand="Toyota Corolla"
            rentPrice="30.00"
            model="2010"
            driveType="Manual"
            fuel="15"
          />
        </Col>
        <Col md={6} xl={4} className="d-flex justify-content-center">
          <ProductCard
            path="/images/productCards/card-image-4.png"
            brand="Kia Carens"
            rentPrice="80.00"
            model="2022"
            driveType="Automatic"
            fuel="10"
          />
        </Col>
        <Col md={6} xl={4} className="d-flex justify-content-center">
          <ProductCard
            path="/images/productCards/card-image-3.png"
            brand="Toyota prius"
            rentPrice="60.00"
            model="2017"
            driveType="Automatic"
            fuel="25"
          />
        </Col>
        <Col md={6} xl={4} className="d-flex justify-content-center">
          <ProductCard
            path="/images/productCards/card-image-1.png"
            brand="Kia Carens"
            rentPrice="80.00"
            model="2022"
            driveType="Automatic"
            fuel="10"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default HotOfferCard;
