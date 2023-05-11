import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
    faCarRear,
    faRobot,
    faGaugeHigh,
} from "@fortawesome/free-solid-svg-icons";
import "./card.css";

function ProductCard(props) {
    return (
        <div className="product-card shadow-2 border-secondary-2 rounded-2">
            <div className="product-card-image">
                <img src={props.image} alt="off not found" />
            </div>
            <div className="mt-2 product-card-body">
                <div>
                    <h5 className="fw-bold text-center">{props.brandName.charAt(0).toUpperCase() + props.brandName.slice(1)}</h5>
                    <h5 className="fw-bold text-center mt-2 ">
                        {props.price}Rs
                        <span>/ Day</span>
                    </h5>
                </div>
                <div>
                    <ul className="my-3 d-flex justify-content-between">
                        <li className="fw-bold">
                            <FontAwesomeIcon
                                className="me-2 f-1x"
                                icon={faCarRear}
                            ></FontAwesomeIcon>
                            <span className="product-property">Model:{props.model}</span>
                        </li>
                        <li className="fw-bold">
                            <FontAwesomeIcon
                                className="me-2 f-1x"
                                icon={faRobot}
                            ></FontAwesomeIcon>
                            <span className="product-property">{props.transmission}</span>
                        </li>
                        <li className="fw-bold">
                            <FontAwesomeIcon
                                className="me-2 f-1x"
                                icon={faGaugeHigh}
                            ></FontAwesomeIcon>
                            <span className="product-property">{props.fuelAverage}Kmpl</span>
                        </li>
                    </ul>
                </div>
                <div className="mt-4" >
                    <Link to='/vehicles' className="offer-btn-1">View Detail</Link>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;