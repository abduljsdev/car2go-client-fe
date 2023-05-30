import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Formik, Form } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { CommonInput } from "../../components/bookingForm/commonInput";
import { useSelector } from "react-redux";
import { postApi } from '../../services/apiCaller.service'
import { Notifications } from "../../components/common/notifications";
import Spinner from "../../components/common/spinner"
import * as Yup from "yup";
import { addFormData } from "../../store/bookingFormSlice";
import { useDispatch } from "react-redux";
import moment from 'moment';




function DriverForm() {
    const [loading, setLoading] = useState(false);
    const [forDataValues, setFormDataValues] = useState({});
    const formObj = useSelector((state) => state.formData);

    const dispatch = useDispatch();
    const navigate = useNavigate();
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
                    )
                    .min(3, "First name at least 3 characters")
                    .max(40, "First name not great then 40 characters"),
                lastName: Yup.string()
                    .required("Last Name required")
                    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed ")
                    .min(3, "Last name at least 3 characters")
                    .max(40, "Last name not great then 40 characters"),
                cnic: Yup.string()
                    .matches(/^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/, 'Invalid CNIC number format')
                    .min(15, 'CNIC number must be at least 15 digits')
                    .max(15, 'CNIC number cannot exceed 15 digits')
                    .required('CNIC number is required'),
                license: Yup.string().required('Driver license required'),

            })}
            onSubmit={async (values, { setSubmitting }) => {
                const isPickupDateSmaller = moment(formObj.formObj.pickUpDate).isAfter(formObj.formObj.returnDate);
                if (isPickupDateSmaller) {
                    Notifications("Invalid Date", "error", "top-right");
                    return navigate("/vehicles");
                }
                try {
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
                    dispatch(addFormData({}));


                    Notifications("Your Booking is done!", "error", "top-right");

                    setSubmitting(false);
                } catch (err) {
                    setLoading(false)
                    if (!err?.response) {
                        Notifications("No Server response", "error", "top-right");
                    } else if (err.response.data.statusCode === 409) {
                        Notifications("Driver is ready booked", "error", "top-right");
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
                                        {loading ? <Spinner /> : <button className="form-btn" type="submit">
                                            Confirm Booking
                                        </button>}
                                    </div>
                                    <div className="mx-4 border">
                                        <button className="form-btn">
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
