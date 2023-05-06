import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Formik, Form } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CommonInput } from "../../components/bookingForm/commonInput";
import { useSelector } from "react-redux";
import { postApi } from '../../services/apiCaller.service'
import { Notifications } from "../../components/common/notifications";
import Spinner from "../../components/common/spinner"
import * as Yup from "yup";



function DriverForm() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [forDataValues, setFormDataValues] = useState({});
    const formObj = useSelector((state) => state.formData);
    const params = useParams();
    useEffect(() => {
        setFormDataValues(formObj.formObj);
    }, [])
    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                cnic: "",
                license: "",

            }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .required("First Name Required")
                    .matches(
                        /^[aA-zZ\s]+$/,
                        "Only alphabets allowed for this field "
                    ),
                lastName: Yup.string()
                    .required("Last Name required")
                    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed "),
                cnic: Yup.string().required('CNIC is required'),
                license: Yup.string().required('Driver license required'),

            })}
            onSubmit={async (values, { setSubmitting }) => {
                try {
                    // alert(JSON.stringify(values, null, 2));
                    setLoading(true);
                    // eslint-disable-next-line
                    const response = await postApi({
                        url: `${process.env.REACT_APP_BASE_URL}/driver`,
                        method: "POST",
                        body: values
                    },
                    );
                    if (response.data.data) {
                        const newFormDataValues = { ...forDataValues, carId: params.id, driverId: response.data.data }
                        const carBooking = await postApi({
                            url: `${process.env.REACT_APP_BASE_URL}/booking`,
                            method: "POST",
                            body: newFormDataValues
                        },
                        );
                    }
                    setLoading(false)

                    navigate("/home");

                    Notifications("Your Booking is done!", "error", "top-right");

                    setSubmitting(false);
                } catch (err) {
                    setLoading(false)
                    navigate("/vehicles");
                    if (!err?.response) {
                        Notifications("No Server response", "error", "top-right");
                    } else if (err.response.data.statusCode === 409) {
                        Notifications("Car already register", "error", "top-right");
                    }

                }
            }}
        >
            {({ errors, touched, setFieldValue }) => (
                <Container>
                    <div className="my-5">
                        <h3>Driver Information</h3>
                        <p>Must match Driver's License</p>

                        <Form>
                            <Row className="my-3">
                                <Col md={6}>
                                    <CommonInput
                                        label="First Name"
                                        fieldRequired="*"
                                        name="firstName"
                                        type="text"
                                    />
                                </Col>
                            </Row>
                            <Row className="my-3">
                                <Col md={6}>
                                    <CommonInput
                                        label="Last Name"
                                        fieldRequired="*"
                                        name="lastName"
                                        type="text"
                                    />
                                </Col>
                            </Row>
                            <Row className="my-3">
                                <Col md={6}>
                                    <CommonInput
                                        label="CNIC"
                                        fieldRequired="*"
                                        name="cnic"
                                        type="text"
                                    />
                                </Col>
                            </Row>
                            <Row className="my-3">
                                <Col md={6}>
                                    <CommonInput
                                        label="Driver License"
                                        fieldRequired="*"
                                        name="license"
                                        type="text"
                                    />
                                </Col>
                            </Row>
                            <Row className="my-3">
                                <Col className="d-flex justify-content-center my-5 ">
                                    <div>
                                        {loading ? <Spinner /> : <button className="form-btn fw-bold" type="submit">
                                            Confirm Booking
                                        </button>}
                                    </div>
                                    <div className="mx-4 border">
                                        <button className="form-btn fw-bold">
                                            Cancel
                                        </button>
                                    </div>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </Container>

            )
            }
        </Formik >
    );
}



export default DriverForm;
