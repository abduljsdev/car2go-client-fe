import './seller.css'
import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { CommonInput } from "../../components/bookingForm/commonInput";
import { CommonSelect } from "../../components/form/commonSelect";
import { CommonRadio } from "../../components/form/commonRadio";
import { Notifications } from "../../components/common/notifications";
import Spinner from "../../components/common/spinner";
import { postApi } from "../../services/apiCaller.service";
import { useNavigate } from "react-router-dom";


function AddCar() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation(position.coords);
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);
  if (location) {
    return (
      <Formik
        initialValues={{
          name: "",
          brandName: "",
          model: "",
          number: "",
          price: "",
          category: "",
          seats: "",
          fuelAverage: "",
          doors: "",
          luggageCapacity: "",
          passengerCapacity: "",
          transmission: "",
          airCondition: "",
          location: "",
          image: null,
          latitude: location.latitude,
          longitude: location.longitude
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("Name Required")
            .matches(
              /^[aA-zZ\s]+$/,
              "Only alphabets allowed for this field "
            ),
          brandName: Yup.string()
            .required("Brand name Required")
            .matches(
              /^[aA-zZ\s]+$/,
              "Only alphabets allowed for this field "
            ),
          model: Yup.number().required("Model required"),
          number: Yup.number().required("Number required"),
          price: Yup.number().required("Price required"),
          category: Yup.string()
            .required("Category required")
            .matches(
              /^[aA-zZ\s]+$/,
              "Only alphabets allowed for this field "
            ),
          seats: Yup.number().required("Seats required"),
          fuelAverage: Yup.number().required("Fuel average required"),
          doors: Yup.number().required("Doors is required"),
          luggageCapacity: Yup.number().required("Luggage capacity required"),
          passengerCapacity: Yup.number().required("Passenger capacity"),
          // transmission: Yup.number().required("Transmission required"),
          // airCondition: Yup.boolean().required("Air condition required"),
          location: Yup.string().required("Location required"),
          image: Yup.mixed().required("Required image"),


        })}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            alert(JSON.stringify(values, null, 2));
            setLoading(true);
            // eslint-disable-next-line
            const response = await postApi({
              url: `${process.env.REACT_APP_BASE_URL}/seller/add-car`,
              method: "POST",
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
            navigate("../view-all");

            setSubmitting(false);
          } catch (err) {
            setLoading(false)
            if (!err?.response) {
              Notifications("No Server response", "error", "top-right");
            } else {
              Notifications("New car not added ", "error", "top-right");
            }
          }
        }}
      >
        {({ errors, touched, setFieldValue, getValues, values }) => (
          <Form id="add-car-form">
            <div className="p-5">
              <Row className="gy-5 gx-5">
                <Col sm={12}>
                  <div className="divider-line">
                    <span>
                      Add New Car
                    </span>
                  </div>
                </Col>
                <Col md={12}>
                  <CommonInput
                    label="Name"
                    fieldRequired="*"
                    name="name"
                    type="text"
                  />
                </Col>
                <Col md={6}>
                  <CommonInput
                    label="Brand Name"
                    fieldRequired="*"
                    name="brandName"
                    type="text"
                  />
                </Col>
                <Col md={6}>
                  <CommonInput
                    label="Model"
                    fieldRequired="*"
                    name="model"
                    type="text"
                  />
                </Col>
                <Col md={6}>
                  <CommonInput
                    label="Number"
                    fieldRequired="*"
                    name="number"
                    type="text"
                  />
                </Col>
                <Col md={6}>
                  <CommonInput
                    label="Price"
                    fieldRequired="*"
                    name="price"
                    type="text"
                  />
                </Col>
                <Col md={12}>
                  <CommonSelect label="Category" name="category">
                    <option value="">Select Category</option>
                    <option value="MICRO">Micro</option>
                    <option value="SUV">Suv</option>
                    <option value="SEDAN">Sedan</option>
                    <option value="MUV">Muv</option>
                    <option value="VAN">Van</option>
                  </CommonSelect>
                </Col>
                <Col md={6}>
                  <CommonInput
                    label="Seats"
                    fieldRequired="*"
                    name="seats"
                    type="text"
                  />
                </Col>
                <Col md={6}>
                  <CommonInput
                    label="Fuel Average"
                    fieldRequired="*"
                    name="fuelAverage"
                    type="text"
                  />
                </Col>
                <Col md={6}>
                  <CommonInput
                    label="Doors"
                    fieldRequired="*"
                    name="doors"
                    type="text"
                  />
                </Col>
                <Col md={6}>
                  <CommonInput
                    label="Luggage Capacity"
                    fieldRequired="*"
                    name="luggageCapacity"
                    type="text"
                  />
                </Col>
                <Col md={12}>
                  <CommonSelect label="Passenger" name="passengerCapacity">
                    <option value="">Select Passenger</option>
                    <option value="4">4</option>
                    <option value="6">6</option>
                    <option value="8">8</option>
                    <option value="10">10</option>
                    <option value="12">12</option>
                  </CommonSelect>
                </Col>
                <Col md={6}>
                  <label htmlFor="transmission">Transmission</label>
                  <CommonRadio
                    label="Auto"
                    name="transmission"
                    value="AUTO"
                    type="radio"
                  />
                  <CommonRadio
                    label="Manual"
                    name="transmission"
                    value="MANUAL"
                    type="radio"
                  />
                </Col>
                <Col md={6}>
                  <label htmlFor="airCondition" >Air Condition</label>
                  <CommonRadio
                    label="Yes"
                    name="airCondition"
                    value="true"
                    type="radio"
                  />
                  <CommonRadio
                    label="No"
                    name="airCondition"
                    value="false"
                    type="radio"
                  />
                </Col>
                <Col md={12}>
                  <CommonInput
                    label="Location"
                    fieldRequired="*"
                    name="location"
                    type="text"
                  />
                </Col>
                <Col md={12}>
                  <input
                    label="Image"
                    name="image"
                    type="file"
                    onChange={(event) => {
                      if (event.target.files[0]) {
                        setFieldValue("image", event.target.files[0]);
                      }
                    }}
                  />
                </Col>
                <Col sm={12}>
                  <div className="text-center mt-5">
                    {loading ? <Spinner /> :
                      <button type="submit" className="form-btn fw-bold">
                        Add Car
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
}

export default AddCar;


