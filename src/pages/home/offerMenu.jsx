import { Row, Col } from "react-bootstrap";

function OfferMenu() {
  return (
    <Row className="container-fluid">
      <Col className="mb-5 text-center">
        <ul className="offer-menu">
          <li>
            <button className="offer-links">ALL BRANDS</button>
          </li>
          <li>
            <button className="offer-links">TOYOTA</button>
          </li>
          <li>
            <button className="offer-links">HONDA</button>
          </li>
          <li>
            <button className="offer-links">SUZUKI</button>
          </li>
          <li>
            <button className="offer-links">KIA SPOTAGE</button>
          </li>
        </ul>
      </Col>
    </Row>
  );
}

export default OfferMenu;
