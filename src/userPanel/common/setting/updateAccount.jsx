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
import { CommonDatePicker } from "../../../components/bookingForm/datePicker";
import { subMonths } from 'date-fns';


function UpdateAccount() {
  const navigate = useNavigate();
  const token = localStorage.getItem('user-token')
  const currentUser = jwtDecode(token);
  const id = currentUser.account.id;
  const [accountData, setAccountData] = useState({});
  const [loading, setLoading] = useState(false);
  const [dateOfBirth, setdateOfBirth] = useState(subMonths(new Date(), 216));

  useEffect(() => {
    const getAccount = async () => {
      const res = await getApi({ url: `${process.env.REACT_APP_BASE_URL}/account/${id}` });
      const data = res.data.data;
      setAccountData(data);
    };
    getAccount();
  }, [])
  const extractDate = (datetimeString) => {
    const dateObj = new Date(datetimeString);
    const year = dateObj.getFullYear();
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0'); // Add leading zero if necessary
    const day = dateObj.getDate().toString().padStart(2, '0'); // Add leading zero if necessary
    return `${year}-${month}-${day}`;
  };
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        firstName: accountData?.firstName,
        lastName: accountData?.lastName,
        city: accountData?.city,
        street: accountData?.street,
        phoneNumber: accountData?.phoneNumber,
        dateOfBirth: extractDate(accountData?.dateOfBirth),
        cnicNumber: accountData?.cnicNumber
      }}
      validationSchema={Yup.object({



      })}
      onSubmit={async (values, { setSubmitting }) => {
        try {
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
          Notifications("Account Updated Successfully", "success", "top-right");
          navigate("../view-account");

          setSubmitting(false);
        } catch (err) {
          setLoading(false)
          if (!err?.response) {
            Notifications("No Server response", "error", "top-right");
          } else {
            Notifications("Account Not Updated ", "error", "top-right");
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
                  <CommonDatePicker
                    label=""
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


