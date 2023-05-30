import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { clickBtn } from '../../store/autoClickSlice';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBriefcase,
  faCodeCompare,
  faGasPump,
  faPeopleRoof,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./card.css";
import { unValidateDate } from "../../store/validateDateSlice";


export default function ProductCard2(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formObj = useSelector((state) => state.formData);
  let isLoggedIn = useSelector((state) => state.auth);
  isLoggedIn = isLoggedIn.isLoggedIn
  const handleChange = (event) => {
    dispatch(clickBtn());
    // setTimeout(() => {
    if (!isLoggedIn) {
      return navigate('/login')
    }
    if (formObj.formObj.pickUpLocation) {
      dispatch(unValidateDate())
      return navigate(`/booking-vehicles/${event.target.id}`)
    }
    navigate(`/vehicles`)
    // }, 200);
  }

  return (
    <>
      <div className="product-car-2 py-2 my-5 d-flex shadow-1">
        <div className="main-card" style={{ width: "35%" }}>
          <img
            src={props.image}
            alt="car image not found!"
          />
        </div>

        <div className="product-car-2-properties" style={{ width: "45%" }}>
          <h5 className=" fw-bold product-card-2-title">
            {props.name}
          </h5>
          <div className="d-flex">
            <div className="ms-3">
              <ul className="product-card-2-list">
                <li className="fs-0">
                  <span className="fx-1 me-2">
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                  </span>
                  {props.seats} Seats
                </li>
                <li className="fs-0">
                  <span className="  fx-1 me-2">
                    <FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>
                  </span>
                  {props.bag} Large bag
                </li>

                <li className="fs-0">
                  <span className="  fx-1 me-2">
                    <FontAwesomeIcon icon={faCodeCompare}></FontAwesomeIcon>
                  </span>
                  {props.category}
                </li>
              </ul>
            </div>
            <div className="ms-4">
              <ul className="product-card-2-list">
                <li className="fs-0">
                  <span className="  fx-1 me-2">
                    <FontAwesomeIcon icon={faPeopleRoof}></FontAwesomeIcon>
                  </span>
                  {props.transmission}
                </li>

                <li className="fs-0">
                  <span className="  fx-1 me-2">
                    <FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon>
                  </span>
                  {props.smallBag} Small bag
                </li>

                <li className="fs-0">
                  <span className="  fx-1 me-2">
                    <FontAwesomeIcon icon={faGasPump}></FontAwesomeIcon>
                  </span>
                  {props.fuelAverage} Fuel Av
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="product-card-2-price pe-3" style={{ width: "25%" }}>
          <div className="product-card-2-price-section">
            <p className="text-end">Price for 1 day</p>
            <p className="text-end">{props.price}.Rs</p>
            <button id={props.id} onClick={handleChange} className="offer-btn-1">
              View deal
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
