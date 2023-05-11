import "./auth.css"
import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Formik, Form } from "formik";
import { CommonInput1 } from "../components/form/commonInput1";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Notifications } from "../components/common/notifications";
import { postApi } from "../services/apiCaller.service";
import Spinner from "../components/common/spinner";

function SignUp() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
                role: "SELLER"

            }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .required("First Name Required")
                    .matches(
                        /^[aA-zZ\s]+$/,
                        "Only alphabets allowed for this field "
                    )
                    .min(3, "First name at least 3 characters")
                    .max(40, "First name not great then 40 characters"),
                lastName: Yup.string()
                    .required("Last Name required")
                    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed ")
                    .min(3, "Last name at least 3 characters")
                    .max(40, "Last name not great then 40 characters"),
                email: Yup.string()
                    .email("Invalid email")
                    .required("Email required")
                    .max(30, "Email not great then 40 characters"),
                password: Yup.string()
                    .matches(
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        'Password must be at least 8 characters, contain at least one uppercase letter, one lowercase letter, one number and one special character'
                    )
                    .required('Password is required')
                    .max(30, "Password not great then 40 characters"),
                confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Password must match"),
            })}
            onSubmit={async (values, { setSubmitting }) => {
                try {
                    setLoading(true);
                    console.log(values);
                    // eslint-disable-next-line
                    const response = await postApi({
                        url: `${process.env.REACT_APP_BASE_URL}/auth/register`,
                        method: "POST",
                        body: values
                    }
                    );
                    setLoading(false)
                    Notifications("Registered Successfully", "success", "top-right");
                    navigate("/login");

                    setSubmitting(false);
                } catch (err) {
                    setLoading(false)
                    if (!err?.response) {
                        Notifications("No Server response", "error", "top-right");
                    } else if (err.response?.status === 409) {
                        Notifications("User already register", "error", "top-right");
                    } else {
                        Notifications("Login Failed", "error", "top-right");
                    }
                }
            }}
        >
            {({ errors, touched, setFieldValue }) => (
                <div>
                    <div className="sign-up-section mx-auto">
                        <div>
                            <Form id="sign-up-form">
                                <Row>
                                    <Col lg={6}>
                                        <div className="sign-up-image">
                                            <img src="/images/sign-up-image.jpg" alt="..." />
                                        </div>
                                    </Col>
                                    <Col lg={6} style={{ padding: "0px 25px" }}>
                                        <Row className="mt-3">
                                            <Col>
                                                <h3 className="text-center">Create an Account</h3>
                                            </Col>
                                        </Row>
                                        <Row className="gy-3">
                                            <Col md={6} className="sign-up-input">
                                                <CommonInput1
                                                    label="First Name"
                                                    fieldRequired="*"
                                                    name="firstName"
                                                    type="text"
                                                    placeholder="Haider Ali" />
                                            </Col>

                                            <Col md={6} className="sign-up-input">
                                                <CommonInput1
                                                    label="Last Name"
                                                    fieldRequired="*"
                                                    name="lastName"
                                                    type="text"
                                                    placeholder="Smith jon" />
                                            </Col>
                                        </Row>
                                        <Row className="sign-up-input">
                                            <Col md={12}>
                                                <CommonInput1
                                                    label="Email"
                                                    fieldRequired="*"
                                                    name="email"
                                                    type="email"
                                                    placeholder="HaiderAli12@gmail.com" />
                                            </Col>
                                        </Row>
                                        <Row className="sign-up-input">
                                            <Col md={12}>
                                                <CommonInput1
                                                    label="Password"
                                                    fieldRequired="*"
                                                    name="password"
                                                    type="password"
                                                    placeholder="" />
                                            </Col>
                                        </Row>
                                        <Row className="sign-up-input">
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
                                                {loading ? <Spinner /> : <button className="btn-1" type="submit">SignUp</button>}
                                            </Col>
                                        </Row>
                                        <Row className="sign-up-input">
                                            <Col sm={12} className="text-center">
                                                <p>Already have an account?<Link to="/login"> Log In</Link></p>
                                            </Col>
                                        </Row>
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



export default SignUp;
