import React, { useEffect, useState } from "react";
import Spinner from "../../../components/common/spinner";
import jwtDecode from "jwt-decode"
import { Row, Col } from "react-bootstrap";
import { Formik, Form } from "formik";
import { CommonInput } from "../../../components/bookingForm/commonInput";
import { Notifications } from "../../../components/common/notifications";
import { patchApi } from "../../../services/apiCaller.service";
import { useNavigate } from "react-router-dom";
import { CommonDatePicker } from "../../../components/bookingForm/datePicker";
import { subMonths } from 'date-fns'
import * as Yup from "yup";
import "./account.css";

function CreateAccount() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [dateOfBirth, setdateOfBirth] = useState(subMonths(new Date(), 216));
    const [accountId, setAccountId] = useState(0);
    const token = localStorage.getItem('user-token');
    const currentUser = jwtDecode(token);
    const currentUserAccountId = currentUser.account.id;


    useEffect(() => {
        setAccountId(currentUserAccountId);
    }, [])
    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                city: "",
                street: "",
                phoneNumber: "",
                dateOfBirth: "",
                cnicNumber: "",
                idCardFrontImage: null,
                idCardBackImage: null
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
                city: Yup.string()
                    .required("City Name required")
                    .matches(
                        /^[aA-zZ\s]+$/,
                        "Only alphabets allowed for this field "
                    )
                    .min(4, "City name at least 4 characters")
                    .max(30, "City name not great then 30 characters"),
                street: Yup.string()
                    .required("Street Name required")
                    .min(10, "Street address at least 10 characters")
                    .max(70, "Street address not great then 70 characters"),
                phoneNumber: Yup.string()
                    .matches(/^[0-9]+$/, 'Must be only digits')
                    .min(11, 'Phone number must be at least 11 digits')
                    .max(11, 'Phone number cannot exceed 11 digits')
                    .required('Phone number is required'),
                dateOfBirth: Yup.string()
                    .required("Date of birth name required"),
                cnicNumber: Yup.string()
                    .matches(/^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/, 'Invalid CNIC number format')
                    .min(15, 'CNIC number must be at least 15 digits')
                    .max(15, 'CNIC number cannot exceed 15 digits')
                    .required('CNIC number is required'),
                idCardFrontImage: Yup.mixed().required("Image required"),
                idCardBackImage: Yup.mixed().required("Image required"),

            })}
            onSubmit={async (values, { setSubmitting }) => {
                try {
                    console.log(values);
                    setLoading(true);
                    // eslint - disable - next - line
                    const response = await patchApi({
                        url: `${process.env.REACT_APP_BASE_URL}/account/${accountId}`,
                        method: "patch",
                        body: values,
                        options: {
                            headers: {
                                "Content-Type": "multipart/form-data",
                            }
                        }
                    }
                    );
                    const userData = response.data;
                    const token = userData.data.access_token;
                    if (!token) {
                        setLoading(false)
                        return Notifications("Token not refresh", "warn", "top-right");
                    }
                    localStorage.clear();
                    localStorage.setItem('user-token', token);
                    setLoading(false)
                    Notifications("Account Successfully created", "success", "top-right");
                    navigate("/dashboard/view-account");

                    setSubmitting(false);
                } catch (err) {
                    setLoading(false)
                    if (!err?.response) {
                        Notifications("No Server response", "error", "top-right");
                    } else {
                        console.log(err);
                        Notifications("Account not created", "error", "top-right");
                    }
                }
            }}
        >
            {({ errors, touched, setFieldValue, getValues, values }) => (
                <Form id="create-account-form" className=" create-account-section mx-auto">
                    <div className="create-account">
                        <Row>
                            <Col>
                                <h3 className="text-center">Create Account</h3>
                            </Col>
                        </Row>
                        <Row className="mt-3 gx-4">
                            <Col lg={6} className="mt-4" >
                                <CommonInput
                                    label="First Name"
                                    fieldRequired="*"
                                    name="firstName"
                                    type="text"
                                />
                            </Col>
                            <Col lg={6} className="mt-4">
                                <CommonInput
                                    label="Last Name"
                                    fieldRequired="*"
                                    name="lastName"
                                    type="text"
                                />
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col>
                                <CommonDatePicker
                                    label="Date Of Birth"
                                    fieldRequired="*"
                                    selected={dateOfBirth}
                                    onChange={(date) => {
                                        setdateOfBirth(date)
                                        setFieldValue("dateOfBirth", dateOfBirth);
                                    }}
                                    minDate={subMonths(new Date(), 800)}
                                    maxDate={subMonths(new Date(), 100)}
                                />
                            </Col>
                        </Row>
                        <Row className="gx-4">
                            <Col lg={6} className="mt-4">
                                <CommonInput
                                    label="City"
                                    fieldRequired="*"
                                    name="city"
                                    type="text"
                                />
                            </Col>
                            <Col lg={6} className="mt-4">
                                <CommonInput
                                    label="Street"
                                    fieldRequired="*"
                                    name="street"
                                    type="text"
                                />
                            </Col>
                        </Row>
                        <Row className="">
                            <Col lg={6} className="mt-4">
                                <CommonInput
                                    label="Phone Number"
                                    fieldRequired="*"
                                    name="phoneNumber"
                                    type="text"
                                />
                            </Col>
                            <Col lg={6} className="mt-4">
                                <CommonInput
                                    label="CNIC Number"
                                    fieldRequired="*"
                                    name="cnicNumber"
                                    type="text"
                                />
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col>
                                Make sure you upload both following
                                <ol>
                                    <li className="mt-2">
                                        <span>1. </span> <span className="fw-bold">Front</span> image of your valid ID
                                    </li>
                                    <li className="mt-2">
                                        <span>2. </span> <span className="fw-bold">Back</span> image of your valid ID
                                    </li>

                                </ol>
                            </Col>
                        </Row>
                        <Row className="mt-3 gx-5">
                            <Col lg={6}>
                                <CommonInput
                                    label="Attach front ID"
                                    fieldRequired="*"
                                    name="idCardFrontImage"
                                    type="file"
                                    value={undefined}

                                    onChange={(event) => {
                                        if (event.target.files[0]) {
                                            setFieldValue("idCardFrontImage", event.target.files[0]);
                                        }
                                        else {
                                            setFieldValue("idCardFrontImage", null);
                                        }
                                    }}
                                />
                            </Col>
                            <Col lg={6}>
                                <CommonInput
                                    label="Attach back ID"
                                    fieldRequired="*"
                                    name="idCardBackImage"
                                    type="file"
                                    value={undefined}
                                    onChange={(event) => {
                                        if (event.target.files[0]) {
                                            setFieldValue("idCardBackImage", event.target.files[0]);
                                        }
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="text-center mt-5">
                                    {loading ? <Spinner /> :
                                        <button type="submit" className=" form-btn">
                                            Save
                                        </button>}

                                </div>
                            </Col>
                        </Row>
                    </div>
                </Form>
            )
            }
        </Formik >
    );
}

export default CreateAccount;


