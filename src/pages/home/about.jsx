import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Image } from "react-bootstrap";

function About() {
  return (
    <Row className="container ms-auto me-auto" style={{ marginTop: "70px", marginBottom: "70px" }}>
      <Col lg={6}>
        <div className="about-left">
          <h2 className="text-secondary">About Us</h2>
          <h3>Welcome to Car2GO</h3>
          <p>
            Since 1992 we have not only committed ourselves to delivering
            exceptional repair and maintenance service to the worldwide
            automotive owners.
          </p>
          <div className="about-list">
            <ul>
              <li>
                <span className="about-icon me-3">
                  <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                </span>
                Have a larger stock of vehicles
              </li>
              <li>
                <span className="about-icon me-3">
                  <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                </span>
                We are a trusted name
              </li>
            </ul>
          </div>
        </div>
      </Col>
      <Col lg={6}>
        <Image fluid src="./images/about.png" />
      </Col>
    </Row>
  );
}

export default About;
