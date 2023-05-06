import { Row, Col } from "react-bootstrap";

function TextSection(props) {
  return (
    <Row>
      <Col className="text-center text-section">
        <h3 className="text-primary">{props.heading1}</h3>
        <h1 className="text-secondary">{props.heading2}</h1>
      </Col>
    </Row>
  );
}

export default TextSection;
