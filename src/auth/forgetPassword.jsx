import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { Notifications } from "../components/common/notifications";
import { postApi } from "../services/apiCaller.service";
import { CommonInput1 } from "../components/form/commonInput1";
import Spinner from "../components/common/spinner";
import * as Yup from "yup";
import "./auth.css"




function ForgetPassword() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        email: "abdulrehman84641@gmail.com",

      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Invalid email")
          .required("Email required"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          setLoading(true)
          // eslint-disable-next-line
          const response = await postApi({
            url: `${process.env.REACT_APP_BASE_URL}/auth/forget-password`,
            method: "POST",
            body: values,
          });
          setLoading(false)
          Notifications("Check your email ", "success", "top-right");
          setSubmitting(false);
          navigate("/verification-code")
        } catch (err) {
          setLoading(false)
          Notifications("Invalid Email", "error", "top-right");
        }
      }}
    >
      {({ errors, touched, setFieldValue }) => (
        <div>
          <div className="forget-password-section">
            <div>
              <Form id="forget-password-form">
                <Row>
                  <Col className="text-center">
                    <img src="/images/forget-password-image.png" alt="..." className="forget-password-image" />
                  </Col>
                </Row>
                <Row>
                  <Col className="text-center">
                    <h4>Forgot Password?</h4>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-center">
                    <p>Please write your email to receive a confirmation code to set new password</p>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col>
                    <CommonInput1
                      label="Email"
                      fieldRequired="*"
                      name="email"
                      type="email"
                      placeholder="HaiderAli12@gmail.com" />
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col sm={12} className="text-center">
                    {loading ? <Spinner /> : <button className="btn-1" type="submit">Confirm Email</button>}
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



export default ForgetPassword;
