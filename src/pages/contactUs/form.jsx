import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Formik, Form } from "formik";
import { CommonInput } from "../../components/bookingForm/commonInput";

import { Notifications } from "../../components/common/notifications";
import { postApi } from "../../services/apiCaller.service";
import Spinner from "../../components/common/spinner";
import * as Yup from "yup";
import './contact.css';
import CommonTextArea from "../../components/form/commonTextArea";



function ContactForm() {
  const [loading, setLoading] = useState(false);
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",

      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .required("Name is required")
          .matches(
            /^[aA-zZ\s]+$/,
            "Only alphabets allowed for this field "
          )
          .min(3, "Last name at least 3 characters")
          .max(40, "First name not great then 40 characters"),
        email: Yup.string()
          .email("Invalid email")
          .required("Email required")
          .max(30, "Email not great then 40 characters"),
        message: Yup.string()
          .required("Name is required")
          .matches(
            /^[aA-zZ\s]+$/,
            "Only alphabets allowed for this field "
          )
          .min(10, "First name at least 10 characters")
          .max(150, "First name not great then 150 characters"),
      })}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          setLoading(true);
          const response = await postApi({
            url: `${process.env.REACT_APP_BASE_URL}/user/contact-us`,
            method: "POST",
            body: values
          }
          );
          setLoading(false)
          resetForm({ values: '' })
          Notifications("Message Send Successfully", "success", "top-right");
          setSubmitting(false);
        } catch (err) {
          setLoading(false)
          if (!err?.response) {
            Notifications("No Server response", "error", "top-right");
          } else {
            Notifications("Message Not Send", "error", "top-right");
          }
        }
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
                    name="email"
                    type="text"
                  />
                </Col>
              </Row>
              <Row className="my-5">
                <Col md={12}>
                  <CommonTextArea label="Write Message" name="message" />
                </Col>
              </Row>
              <Row className="my-3">
                <Col>
                  {loading ? <Spinner /> : <button className="form-btn" type="submit">Send Message</button>}
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
