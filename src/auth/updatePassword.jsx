import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { Notifications } from "../components/common/notifications";
import { postApi } from "../services/apiCaller.service";
import { CommonInput1 } from "../components/form/commonInput1";
import Spinner from "../components/common/spinner";
import "./auth.css"
import * as Yup from "yup";


function UpdatePassword() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    return (
        <Formik
            initialValues={{
                email: "abdulrehman8464@gmail.com",
                password: "",
                confirmPassword: "",
            }}
            validationSchema={Yup.object({
                password: Yup.string()
                    .required("Password required")
                    .matches(
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{5,})/,
                        "Must contain 5 characters, at least one uppercase and one numeric"
                    ),
                confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Password must match"),
            })}
            onSubmit={async (values, { setSubmitting }) => {
                try {
                    setLoading(true)
                    // eslint-disable-next-line
                    const response = await postApi({
                        url: `${process.env.REACT_APP_BASE_URL}/auth/update-password`,
                        method: "POST",
                        body: values,
                    });
                    setLoading(false)
                    Notifications("Update password successfully ! ", "success", "top-right");
                    setSubmitting(false);
                    navigate("/login")
                } catch (err) {
                    setLoading(false)
                    Notifications("Password not update successfully", "error", "top-right");
                }
            }}
        >
            {({ errors, touched, setFieldValue }) => (
                <div>
                    <div className="update-password-section">
                        <div>
                            <Form id="update-password-form">
                                <Row>
                                    <Col>
                                        <h4 className="text-center">Update Password</h4>
                                    </Col>
                                </Row>
                                <Row className="mt-1">
                                    <Col>
                                        <p>Please write your new password.</p>
                                    </Col>
                                </Row>
                                <Row className="mt-3">
                                    <Col md={12}>
                                        <CommonInput1
                                            label="Password"
                                            fieldRequired="*"
                                            name="password"
                                            type="password"
                                            placeholder="" />
                                    </Col>
                                </Row>
                                <Row className="mt-4">
                                    <Col md={12}>
                                        <CommonInput1
                                            label="Confirm Password"
                                            fieldRequired="*"
                                            name="confirmPassword"
                                            type="password"
                                            placeholder="" />
                                    </Col>
                                </Row>
                                <Row className="mt-3">
                                    <Col sm={12} className="text-center">
                                        {loading ? <Spinner /> : <button className="btn-1" type="submit">Confirm Password</button>}
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



export default UpdatePassword;
