import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { CommonInput } from "../../../components/bookingForm/commonInput";
import { Notifications } from "../../../components/common/notifications";
import Spinner from "../../../components/common/spinner";
import { useNavigate } from "react-router-dom";
import {
  faUser,

} from "@fortawesome/free-solid-svg-icons";
import jwtDecode from "jwt-decode";
import { getApi, patchApi } from "../../../services/apiCaller.service";


function UpdateAccount() {
  const navigate = useNavigate();
  const token = localStorage.getItem('user-token')
  const currentUser = jwtDecode(token);
  const id = currentUser.account.id;
  const [accountData, setAccountData] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getAccount = async () => {
      const res = await getApi({ url: `${process.env.REACT_APP_BASE_URL}/account/${id}` });
      const data = res.data.data;
      setAccountData(data);
    };


    getAccount();
    // eslint-disable-next-line
  }, [])
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        firstName: accountData?.firstName,
        lastName: accountData?.lastName,
        city: accountData?.city,
        street: accountData?.street,
        phoneNumber: accountData?.phoneNumber,
        dateOfBirth: accountData?.dateOfBirth,
        cnicNumber: accountData?.cnicNumber
      }}
      validationSchema={Yup.object({



      })}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          alert(JSON.stringify(values, null, 2));
          setLoading(true);
          // eslint-disable-next-line
          const response = await patchApi({
            url: `${process.env.REACT_APP_BASE_URL}/account/${id}`,
            method: "patch",
            body: values,
            options: {
              headers: {
                "Content-Type": "multipart/form-data",
              }
            }
          }
          );
          setLoading(false)
          Notifications("New car added Successfully", "success", "top-right");
          navigate("../view-account");

          setSubmitting(false);
        } catch (err) {
          setLoading(false)
          if (!err?.response) {
            Notifications("No Server response", "error", "top-right");
          } else {
            console.log(err);
            Notifications("New car not added ", "error", "top-right");
          }
        }
      }}
    >
      {({ errors, touched, setFieldValue, getValues, values }) => (
        <Form id="update-account-form">
          <div className="p-5">
            <Row className="gy-5 gx-5">
              <Col sm={12}>
                <div className="divider-line">
                  <span>
                    Update Account
                  </span>
                </div>
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
                    type="text"
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

export default UpdateAccount;


