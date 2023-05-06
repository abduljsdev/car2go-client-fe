import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";


export default function Address() {
  return (
    <>
      <Container className="  my-5 ">
        <Row>
          <Col md={5} className="p-3 mb-5 border-primary-2 rounded-2">
            <div>
              <h4>
                <span className="m-2">
                  <FontAwesomeIcon
                    className="cu-text-secondary"
                    icon={faLocationDot}
                  ></FontAwesomeIcon>
                </span>
                Address
              </h4>
              <p className="mx-5">
                4th Floor, 12 Main Blvd Gulberg, Block K Gulberg 2, Lahore, Punjab
                54000
              </p>
            </div>

            <div>
              <div className="my-5">
                <h4>
                  <span className="m-2">
                    <FontAwesomeIcon
                      className="cu-text-secondary"
                      icon={faEnvelope}
                    ></FontAwesomeIcon>
                  </span>
                  Email
                </h4>
                <p className="mx-5">abdulrehman8464@gmail.com</p>
              </div>

              <div className=" my-5 ">
                <h4>
                  <span className="m-2">
                    <FontAwesomeIcon
                      className="text-secondary "
                      icon={faPhone}
                    ></FontAwesomeIcon>
                  </span>
                  Contact No
                </h4>
                <p className="mx-5">(+92) 3000933528</p>
              </div>
            </div>
          </Col>

          <Col md={{ span: 6, offset: 1 }} className="p-3 mb-5 bg-white border-primary-2 rounded-2">
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe
                  width="100%"
                  height="400"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
                <a href="https://putlocker-is.org"></a>
                <a href="https://www.embedgooglemap.net"></a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}