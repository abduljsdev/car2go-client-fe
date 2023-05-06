import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Formik, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { Notifications } from "../components/common/notifications";
import { postApi } from "../services/apiCaller.service";
import { CommonInput3 } from "../components/form/commonInput3";
import Spinner from "../components/common/spinner";
import * as Yup from "yup";
import "./auth.css"

function VerificationCode() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    return (
        <Formik
            initialValues={{
                email: "abdulrehman8464@gmail.com",
                verification_code: ""

            }}
            validationSchema={Yup.object({
                Verification_code: Yup.string().matches(
                    /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
                    "Only number allowed").min(4)
            })}
            onSubmit={async (values, { setSubmitting }) => {
                try {
                    alert(JSON.stringify(values, null, 2));
                    setLoading(true)
                    // eslint-disable-next-line
                    const response = await postApi({
                        url: `${process.env.REACT_APP_BASE_URL}/auth/verification-code`,
                        method: "POST",
                        body: values,
                    });
                    setLoading(false)
                    Notifications("Successfully verify code ", "success", "top-right");
                    setSubmitting(false);
                    navigate("/update-password")
                } catch (err) {
                    setLoading(false)
                    Notifications("Code is expire", "error", "top-right");
                }
            }}
        >
            {({ errors, touched, setFieldValue }) => (
                <div>
                    <div className="verification-code-section">
                        <div>
                            <Form id="forget-password-form">
                                <Row>
                                    <Col className="text-center">
                                        <img src="/images/forget-password-image.png" alt="..." className="forget-password-image" />
                                    </Col>
                                </Row>
                                <Row className="mt-3">
                                    <Col className="text-center">
                                        <h3>Verification email </h3>
                                    </Col>
                                </Row>
                                <Row className="mt-4">
                                    <Col className="text-center">
                                        <p>Check your email for code verification</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col col={3}>
                                        <CommonInput3 name="verification_code" type="text" maxLength={4} className="verification-code-input" />
                                    </Col>
                                </Row>
                                <Row className="mt-4">
                                    <Col className="text-center">
                                        <p>Don`t  receive the OTP? <Link to='/forget-password'>RESEND OTP</Link></p>
                                    </Col>
                                </Row>
                                <Row className="mt-4">
                                    <Col sm={12} className="text-center">
                                        {loading ? <Spinner /> : <button className="btn-1" type="submit">Confirm code</button>}
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </div>
                </div >
            )
            }
        </Formik >
    );
}



export default VerificationCode;
