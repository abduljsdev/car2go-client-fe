import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "./about.css";

export default function About() {
  return (
    <div>
      <Row>
        <Col className="banner">
        </Col>
      </Row>
      <Container>
        <Row className="my-5">
          <Col md={6}>
            <h2 className=" my-3">About US</h2>
            <h4>
              We Are Committed To Provide Safe Ride Solutions
            </h4>
            <p className="my-3">
              <span>Since 2021,</span> Safe
              Ride Solutions, CEO Gary Lawrence says that SRS provides a real
              world option to driving after drinking. "Our clients want a person
              behind the wheel of their car they can trust. The municipal
              firefighters we are bring on board across the country meet that
              requirement.
            </p>
            <p>
              They also meet the standards we have set for each of our drivers.
              Firefighters knowledge of the city, professionalism, driving
              ability, communication skills, CPR and first aid training are
              skill sets we look for in our drivers
            </p>
            <div className="my-4">
              <h4>Need Any Help?</h4>
              <span>
                <FontAwesomeIcon
                  className="text-primary fs-3"
                  icon={faPhone}
                ></FontAwesomeIcon>
                (+92) 3000933528
              </span>
            </div>
          </Col>

          <Col md={6} >
            <Image
              className="w-100"
              src="http://themescare.com/demos/gauto-preview/assets/img/about-page.jpg"
            ></Image>
          </Col>
        </Row>

        <Row className="p-3">
          <h3 className="text-center  my-3">
            Proud of for this Business <br />
            <span className="text-primary">Rent a Car </span>Now!
          </h3>
          <Image
            className="my-3"
            src="http://themescare.com/demos/gauto-preview/assets/img/cars.png"
          ></Image>
        </Row>

        <Row>
          <Col>
            <div className="my-5">
              <h4>Our Mission</h4>
              <p>
                Car2Go was established with our primary focus on you, our
                customers. It all began with the notion of evolving the
                car-rental industry into a customer-centric and advanced
                solution with a fresh, honest approach. When booking a hire
                vehicle,Car2Go aims to provide hand picked vehicles, trustworthy
                drivers, all at the convenience of your home.
                <p>
                  At Car2Go, each car and driver must undergo ‘Car2Go Selection
                  Tests’ before becoming operational. Quality, being the
                  cornerstone ofCar2Go services, is ensured in every mile.
                </p>
                <p>
                  With your safety and comfort in mind,Car2Go makes car2go
                  simplified for everyone.
                </p>
              </p>
              <h4 className=" gy-3">Our Vision</h4>
              <p>
                From an innovative idea that took the car2go industry by
                storm,Car2Go's vision goes beyond providing car2go services in
                Lahore.Car2Go has set new standards of using technology to
                revolutionize traditional services. More than anything, we
                strive to inspire and facilitate more entrepreneurs to take part
                in this progress.
              </p>

              <h4 className="">What we do</h4>
              <p>
                Car2Go’s car-rental services are available at your fingertips
                online, for a more modern and convenient customer experience.
                Get the car you want, at the time you asked for.Car2Go provides
                both on-demand and pre-scheduled vehicles for any situation,
                occasion or event, such as:
              </p>

              <div>
                <ul>
                  <li >Corporate Office Staff</li>
                  <li>Tours and Trips</li>
                  <li>Weddings</li>
                  <li>Families</li>
                  <li>Individuals</li>
                </ul>
              </div>
              <p>
                One of the biggest strengths of Car2Go is its versatility. Our
                wide-range of latest models and well-maintained cars, is suited
                for everyone and all occasions. WithCar2Go, you get what you
                want. We rent cars with a chauffeur as well as on a self drive
                basis.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
