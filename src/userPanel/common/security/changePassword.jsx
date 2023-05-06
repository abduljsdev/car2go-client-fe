import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { CommonInput } from "../../../components/bookingForm/commonInput";

import { Notifications } from "../../../components/common/notifications";
import Spinner from "../../../components/common/spinner";
import { patchApi } from "../../../services/apiCaller.service";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";


function ChangePassword() {
  const navigate = useNavigate();
  const token = localStorage.getItem('user-token')
  const currentUser = jwtDecode(token);
  const id = currentUser.id;
  const email = currentUser.email;
  const [loading, setLoading] = useState(false);
  return (
    <Formik
      initialValues={{
        email: email,
        oldPassword: "",
        password: "",
        confirmNewPassword: "",
      }}
      validationSchema={Yup.object({



      })}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          alert(JSON.stringify(values, null, 2));
          setLoading(true);
          // eslint-disable-next-line
          const response = await patchApi({
            url: `${process.env.REACT_APP_BASE_URL}/user/change-password/${id}`,
            method: "patch",
            body: values,
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
        <Form id="change-password-form">
          <div className="p-5">
            <Row >
              <Col sm={12}>
                <div className="divider-line">
                  <span>
                    Change Password
                  </span>
                </div>
              </Col>
            </Row>
            <Row className="mt-5 gx-5">
              <Col md={12}>
                <CommonInput
                  label="Old password"
                  fieldRequired="*"
                  name="oldPassword"
                  type="password"
                />
              </Col>
            </Row>
            <Row className="mt-5 gx-5">
              <Col md={12}>
                <CommonInput
                  label="New Password"
                  fieldRequired="*"
                  name="password"
                  type="password"
                />
              </Col>
            </Row>
            <Row className="mt-5 gx-5">
              <Col md={12}>
                <CommonInput
                  label="Confirm New Password"
                  fieldRequired="*"
                  name="confirmNewPassword"
                  type="password"
                />
              </Col>
            </Row>
            <Row className="mt-2 gx-5">
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

export default ChangePassword;


