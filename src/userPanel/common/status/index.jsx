import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { postApi } from "../../../services/apiCaller.service";
import { useNavigate } from "react-router-dom";
import Spinner from "../../../components/common/spinner";

function AccountStatus() {

    const profileData = useSelector((state) => state.userProfile.userProfileData);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleEmailVerification = async () => {

        try {
            setLoading(true);
            const response = await postApi({
                url: `${process.env.REACT_APP_BASE_URL}/auth/email-verification`,
                method: "POST",
                body: { email: profileData.email }
            })
            setLoading(false)
            Notifications("Registered Successfully", "success", "top-right");
            setSubmitting(false);
        } catch (err) {
            setLoading(false)
            if (!err?.response) {
                Notifications("No Server response", "error", "top-right");
            } else {
                Notifications("Some thing went wrong", "error", "top-right");
            }
        }
    }

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
                <Col sm={6}>
                    <h4>abdulrehman8464@gmail.com <span style={{ fontSize: "13px", color: "blue" }}>  {profileData.emailVerified ? "Verified" : "not verified"}</span></h4>
                </Col>
                <Col sm={4}>
                    {profileData.emailVerified ?
                        null : loading ? <Spinner /> : <button className="btn-1" onClick={handleEmailVerification} type="submit">Send Verification Link</button>
                    }
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