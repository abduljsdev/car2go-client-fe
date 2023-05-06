import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./account.css"
import { CommonInput } from "../../../components/bookingForm/commonInput";
import { Notifications } from "../../../components/common/notifications";
import Spinner from "../../../components/common/spinner";
import { patchApi } from "../../../services/apiCaller.service";
import { useNavigate } from "react-router-dom";
import {
    faUser,

} from "@fortawesome/free-solid-svg-icons";
import jwtDecode from "jwt-decode";


function CreateAccount() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
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

            })}
            onSubmit={async (values, { setSubmitting }) => {
                try {
                    alert(JSON.stringify(values, null, 2));
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
                    navigate("/s/view-account");

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
                    <div className="p-5">
                        <Row>
                            <Col>
                                <h3 className="text-center">Create Account</h3>
                            </Col>
                        </Row>
                        <Row className="mt-5 gx-5">
                            <Col md={6}>
                                <CommonInput
                                    label="First Name"
                                    fieldRequired="*"
                                    name="firstName"
                                    type="text"
                                    icon={faUser}
                                />
                            </Col>
                            <Col md={6}>
                                <CommonInput
                                    label="Last Name"
                                    fieldRequired="*"
                                    name="lastName"
                                    type="text"
                                    icon={faUser}
                                />
                            </Col>
                        </Row>
                        <Row className="mt-5 gx-5">
                            <Col>
                                <Col md={12}>
                                    <CommonInput
                                        label="Date Of Birth"
                                        fieldRequired="*"
                                        name="dateOfBirth"
                                        type="date"
                                    />
                                </Col>
                            </Col>
                        </Row>
                        <Row className="mt-5 gx-5">
                            <Col md={6}>
                                <CommonInput
                                    label="City"
                                    fieldRequired="*"
                                    name="city"
                                    type="text"
                                />
                            </Col>
                            <Col md={6}>
                                <CommonInput
                                    label="Street"
                                    fieldRequired="*"
                                    name="street"
                                    type="text"
                                />
                            </Col>
                        </Row>
                        <Row className="mt-5 gx-5">
                            <Col md={6}>
                                <CommonInput
                                    label="Phone Number"
                                    fieldRequired="*"
                                    name="phoneNumber"
                                    type="text"
                                />
                            </Col>
                            <Col md={6}>
                                <CommonInput
                                    label="CNIC Number"
                                    fieldRequired="*"
                                    name="cnicNumber"
                                    type="text"
                                />
                            </Col>
                        </Row>
                        <Row className="mt-5 gx-5">
                            <Col col={12}>
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
                            <Col md={6}>
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
                            <Col md={6}>
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
                        <Row className="mt-3 gx-5">
                            <Col sm={12}>
                                <div className="text-center mt-5">
                                    {loading ? <Spinner /> :
                                        <button type="submit" className=" form-btn fw-bold">
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


