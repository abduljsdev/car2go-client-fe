import { Row, Col } from "react-bootstrap";
import ProductCard from "../../components/card/productCard";
import "../profile.css";

function Favourite() {
  return (
    <Row className="mt-2">
      <Col sm={6}>
        <ProductCard
          path="/images/productCards/card-image-1.png"
          brand="Kia Carens"
          rentPrice="80.00"
          model="2022"
          driveType="Automatic"
          fuel="10"
        />
      </Col>
      <Col sm={6}>
        <ProductCard
          path="/images/productCards/card-image-3.png"
          brand="Toyota prius"
          rentPrice="60.00"
          model="2017"
          driveType="Automatic"
          fuel="25"
        />
      </Col>
    </Row>
  );
}

export default Favourite;
