import { Row, Col, Container } from "react-bootstrap";

function BecomeaSeller() {
  return (
    <div className="seller">
      <div className="seller-diagonal-left cu-bg-primary"></div>
      <div className="seller-diagonal-right cu-bg-secondary"></div>
      <Container>
        <Row>
          <Col></Col>
          <Col md={4} className="be-seller-image">
            <img src="/images/beseller-1.png" alt="Not found" />
          </Col>
          <Col md={7}>
            <div className="be-seller-desc">
              <h3>Do You Want To Earn With Us? So Don't be Late.</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BecomeaSeller;
