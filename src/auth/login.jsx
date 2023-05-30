import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Formik, Form } from "formik";
import { CommonInput1 } from "../components/form/commonInput1";
import { Link, useNavigate } from "react-router-dom";
import { Notifications } from "../components/common/notifications";
import { postApi } from "../services/apiCaller.service";
import { useDispatch } from 'react-redux';
import { login } from '.././store/authSlice'
import Spinner from "../components/common/spinner";
import * as Yup from "yup";
import "./auth.css"
import jwtDecode from "jwt-decode";
import { CommonRadio } from "../components/form/commonRadio";


function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleLogin() {
    dispatch(login());
  }
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        role: ""
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Invalid email")
          .required("Email required"),
        password: Yup.string()
          .required("Password required"),
        role: Yup.string().required('Please select a role type'),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          setLoading(true)
          // eslint-disable-next-line
          const response = await postApi({
            url: `${process.env.REACT_APP_BASE_URL}/auth/login`,
            method: "POST",
            body: values,
          });
          const userData = response.data;
          const token = userData.data.access_token;
          handleLogin()
          if (!token) {
            setLoading(false)
            return Notifications("Login Denied", "warn", "top-right");
          }
          localStorage.clear();
          localStorage.setItem('user-token', token);
          setLoading(false)
          Notifications("Login Successfully", "success", "top-right");
          setSubmitting(false);
          const currentUser = jwtDecode(token);
          if (currentUser.role === 'BUYER') {
            navigate('/home')
          } else {
            if (currentUser.account.firstName === '' || currentUser.account.firstName === undefined) {
              navigate('/create-account')
            } else {
              navigate('/dashboard')

            }
          }
        } catch (err) {
          setLoading(false)
          Notifications("Invalid Credentials", "error", "top-right");
        }
      }}
    >
      {({ errors, touched, setFieldValue }) => (
        <div>
          <div className="login-section mx-auto">
            <div>
              <Form id="login-form">
                <Row>
                  <Col lg={6}>
                    <img src="/images/sign-up-image.jpg" alt="..." className="login-image" />
                  </Col>
                  <Col lg={6} style={{ padding: "0px 25px" }}>
                    <Row className="mt-3">
                      <Col md={12}>
                        <h3 className="text-center">Login</h3>
                      </Col>
                    </Row>
                    <Row className="mt-2">
                      <Col lg={12}>
                        <CommonInput1
                          label="Email"
                          fieldRequired="*"
                          name="email"
                          type="email"
                          placeholder="HaiderAli12@gmail.com" />
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
                    <Row className="mt-3">
                      <Col md={6}>
                        <CommonRadio
                          label="Seller"
                          name="role"
                          value="SELLER"
                          type="radio"
                        />
                      </Col>
                      <Col md={6}>
                        <CommonRadio
                          label="Buyer"
                          name="role"
                          value="BUYER"
                          type="radio"
                        />
                      </Col>
                    </Row>
                    <Row className="mt-4">
                      <Col sm={12} className="text-end">
                        <Link to="/forget-password" style={{ color: "red" }}>Forget Password?</Link>
                      </Col>
                    </Row>

                    <Row className="mt-4">
                      <Col sm={12} className="text-center">
                        {loading ? <Spinner /> : <button className="btn-1" type="submit">Login</button>}
                      </Col>
                    </Row>
                    <Row className="mt-4">
                      <Col sm={12} className="text-center">
                        <p>Don't have an account?<Link to="/sign-up">Sign Up</Link></p>
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



export default Login;
