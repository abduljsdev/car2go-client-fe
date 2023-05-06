import React from "react";
import { Col, Row } from "react-bootstrap";

function AccountStatus() {
    return (
        <>
            <Row className="my-4 px-3">
                <Col sm={12}>
                    <div className="divider-line">
                        <span>
                            Trust & Verification
                        </span>
                    </div>
                </Col>
            </Row>
            <Row className="px-3 mt-5">
                <Col>
                    <h4>abdulrehman8464@gmail.com <span style={{ fontSize: "13px", color: "blue" }}>verified</span></h4>
                </Col>
            </Row>
            <Row className="px-3 my-5">
                <Col>
                    <h4>Identity Verification <span style={{ fontSize: "13px", color: "blue" }}>verified</span></h4>
                </Col>
            </Row>
        </>
    )
}

export default AccountStatus;