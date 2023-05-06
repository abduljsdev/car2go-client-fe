
import React from 'react';
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faClockFour,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./common.css";

function Footer() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Row className=" footer-body text-white  p-5 g-4 py-3 secondary checkout  bg-secondary" style={{ marginTop: "100px" }}>
        <Col md={3} className=" footer-section footer-center ">
          <h4 className="text-primary">Explore</h4>
          <ul className="text-lightGray  py-3">
            <li className="my-2 footer-nav"><Link className="text-white" to="home">Home</Link></li>
            <li className="my-2 footer-nav"><Link className="text-white" to="about">About Us</Link></li>
            <li className="my-2 footer-nav"><Link className="text-white" to="vehicles">Vehicles</Link></li>
            <li className="my-2 footer-nav"><Link className="text-white" to="blog">Blog</Link></li>
            <li className="my-2 footer-nav"><Link className="text-white" to="contact-us">Contact Us</Link></li>
          </ul>
        </Col>

        <Col md={5} className="footer-center ">
          <h4 className=" text-primary">Contact Us</h4>
          <ul className="py-2">
            <li className="my-3">
              <span>
                <FontAwesomeIcon className=" footer-icon mx-2" icon={faLocationDot}></FontAwesomeIcon>
              </span>
              Office # 8, Satti Mansion Plaza, F-10 Markaz Lahore
            </li>

            <li className="my-3 ">
              <span>
                <FontAwesomeIcon className=" footer-icon mx-2" icon={faClockFour}></FontAwesomeIcon>
              </span>
              24 / 7
            </li>

            <li className="my-3">
              <span>
                <FontAwesomeIcon className=" footer-icon mx-2" icon={faEnvelope}></FontAwesomeIcon>
              </span>
              sales@Car2GO.pk
            </li>

            <li className="my-3">
              <span>
                <FontAwesomeIcon className="footer-icon mx-2" icon={faPhone}></FontAwesomeIcon>
              </span>
              +92 3000933528
            </li>
          </ul>
        </Col>

        <Col md={4} className="footer-center">
          <h4 className=" text-primary">About Us</h4>
          <p className="text-lightGray py-3">
            We are expert in Car Rental services provider since 2020 in Islamabad,
            Lahore, Karachi and Major Cities in Pakistan.
          </p>
          <div>
            <FontAwesomeIcon className="fs-2 footer-icon mx-2" icon={faFacebook} />
            <FontAwesomeIcon className="fs-2 footer-icon mx-2" icon={faTwitter} />
            <FontAwesomeIcon className="fs-2 footer-icon mx-2" icon={faWhatsapp} />
            <FontAwesomeIcon className="fs-2 footer-icon mx-2" icon={faInstagram} />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
