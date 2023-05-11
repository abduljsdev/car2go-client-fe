import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Formik, Form } from "formik";
// import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { CommonInput } from "../../components/bookingForm/commonInput";
import './contact.css';

function ContactForm() {
  // const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",

      }}
      validationSchema={Yup.object({

      })}
      onSubmit={async (values, { setSubmitting }) => {
        // try {
        //     setLoading(true);
        //     console.log(values);
        //     // eslint-disable-next-line
        //     const response = await postApi({
        //         url: `${process.env.REACT_APP_BASE_URL}/auth/register`,
        //         method: "POST",
        //         body: values
        //     }
        //     );
        //     setLoading(false)
        //     Notifications("Registered Successfully", "success", "top-right");
        //     // navigate("/login");

        //     setSubmitting(false);
        // } catch (err) {
        //     setLoading(false)
        //     if (!err?.response) {
        //         Notifications("No Server response", "error", "top-right");
        //     } else if (err.response?.status === 409) {
        //         Notifications("User already register", "error", "top-right");
        //     } else {
        //         Notifications("Login Failed", "error", "top-right");
        //     }
        // }
      }}
    >
      {({ errors, touched, setFieldValue }) => (
        <Container>
          <Row>
            <Col>
              <h3>Send Message</h3>
            </Col>
          </Row>
          <div className="my-5 border-primary-2 rounded-2 p-4">
            <Form>
              <Row className="my-3">
                <Col md={6}>
                  <CommonInput
                    label="Your Name"
                    fieldRequired=""
                    name="name"
                    type="text"
                  />
                </Col>
                <Col md={6}>
                  <CommonInput
                    label="Your Email"
                    fieldRequired=""
                    name="emil"
                    type="text"
                  />
                </Col>
              </Row>
              <Row className="my-5">
                <Col md={12}>
                  <label for="textarea" >Your Message</label>
                  <textarea name="message" className="contact-form-text-area w-100"></textarea>
                </Col>
              </Row>
              <Row className="my-3">
                <Col>
                  <button className="form-btn" type="submit">
                    Submit
                  </button>
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



export default ContactForm;
