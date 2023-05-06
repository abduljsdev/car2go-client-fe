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
            <div className="text-center">
                <img src={props.path}
                    style={{
                        width: "270px",
                        height: "150px",
                    }}
                    alt="off not found" />
            </div>
            <div className="mt-2 product-card-body">
                <div>
                    <h4 className="fw-bolder text-center">{props.brand}</h4>
                    <h4 className="fw-bolder text-center mt-2 ">
                        ${props.rentPrice}
                        <span>/ Day</span>
                    </h4>
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
                            <span className="product-property">{props.driveType}</span>
                        </li>
                        <li className="fw-bold">
                            <FontAwesomeIcon
                                className="me-2 f-1x"
                                icon={faGaugeHigh}
                            ></FontAwesomeIcon>
                            <span className="product-property">{props.fuel}Kmpl</span>
                        </li>
                    </ul>
                </div>
                <div className="mt-4" >
                    <Link className="offer-btn-1">View Detail</Link>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;