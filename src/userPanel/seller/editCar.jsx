import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Formik, Form } from "formik";
import { CommonInput } from "../../components/bookingForm/commonInput";
import { CommonSelect } from "../../components/form/commonSelect";
import { CommonRadio } from "../../components/form/commonRadio";
import { Notifications } from "../../components/common/notifications";
import { getApi, patchApi } from "../../services/apiCaller.service";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../../components/common/spinner";
import * as Yup from "yup";



function EditCar() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [carData, setCarData] = useState({});
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const getCar = async () => {
      const res = await getApi({ url: `${process.env.REACT_APP_BASE_URL}/seller/car/${id}` });
      const data = res.data.data;
      setCarData(data);
    };


    getCar();
    // eslint-disable-next-line
  }, [])
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        name: carData.name,
        brandName: carData.brandName,
        model: carData.model,
        number: carData.number,
        price: carData.price,
        category: carData.category,
        seats: carData.seats,
        fuelAverage: carData.fuelAverage,
        doors: carData.doors,
        luggageCapacity: carData.luggageCapacity,
        passengerCapacity: carData.passengerCapacity,
        transmission: carData.transmission,
        airCondition: carData.airCondition,
        location: carData.location,
        image: carData.image
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .required("Name Required")
          .matches(
            /^[aA-zZ\s]+$/,
            "Only alphabets allowed for this field "
          )
          .min(4, "Name at least 4 characters")
          .max(30, "Name not great then 30 characters"),
        brandName: Yup.string()
          .required("Brand name Required")
          .matches(
            /^[aA-zZ\s]+$/,
            "Only alphabets allowed for this field "
          )
          .min(4, "Brand name at least 4 characters")
          .max(30, "Brand name not great then 30 characters"),
        model: Yup.string()
          .matches(/^[0-9]+$/, 'Must be only digits')
          .min(4, 'Model number must be at least 4 digits')
          .max(4, 'Model number cannot exceed 4 digits')
          .required('Model number is required'),
        number: Yup.string()
          .matches(/^[0-9]+$/, 'Must be only digits')
          .min(4, 'Number must be at least 4 digits')
          .max(4, 'Number cannot exceed 4 digits')
          .required('Number is required'),
        price: Yup.string()
          .matches(/^[0-9]+$/, 'Must be only digits')
          .required('Price is required')
          .test('price', 'price must be in between in 3000 and 20000', (value) => {
            if (value >= 3000 && value <= 20000) {
              return value
            }
          }),
        category: Yup.string()
          .required("Category required")
          .matches(
            /^[aA-zZ\s]+$/,
            "Only alphabets allowed for this field "
          ),
        seats: Yup.string()
          .matches(/^[0-9]+$/, 'Must be only digits')
          .required('Seats is required')
          .test('seats', 'Maximum of 10 and minimum 4 seats allowed', (value) => {
            if (value >= 4 && value <= 10) {
              return value
            }
          }),
        fuelAverage: Yup.string()
          .matches(/^[0-9]+$/, 'Must be only digits')
          .required('Seats is required')
          .test('fuelAverage', 'Fuel average must be in between 5 and 20', (value) => {
            if (value >= 5 && value <= 20) {
              return value
            }
          }),
        doors: Yup.string()
          .matches(/^[0-9]+$/, 'Must be only digits')
          .required('doors is required')
          .test('doors', 'Doors must be in between 3 and 6', (value) => {
            if (value >= 3 && value <= 6) {
              return value
            }
          }),
        luggageCapacity: Yup.number().required("Luggage capacity required")
          .test('luggageCapacity', 'Luggage bags must be in between 1 and 6', (value) => {
            if (value >= 1 && value <= 6) {
              return value
            }
          }),
        passengerCapacity: Yup.number().required("Passenger capacity")
          .test('passengerCapacity', 'Passenger capacity  must be in between 1 and 6', (value) => {
            if (value >= 4 && value <= 12) {
              return value
            }
          }),
        // transmission: Yup.boolean().required("Transmission required"),
        // airCondition: Yup.boolean().required("Air condition required"),
        location: Yup.string().required("Location required"),
        image: Yup.mixed().required("Image required"),
      })
      }
      onSubmit={async (values, { setSubmitting }) => {
        try {
          setLoading(true);
          // eslint-disable-next-line
          const response = await patchApi({
            url: `${process.env.REACT_APP_BASE_URL}/seller/update-car/${id}`,
            method: "PATCH",
            body: values,
            options: {
              headers: {
                "Content-Type": "multipart/form-data",
              }
            }
          }
          );
          setLoading(false)
          Notifications("Successfully updated car", "success", "top-right");
          navigate("../view-all");

          setSubmitting(false);
        } catch (err) {
          setLoading(false)
          if (!err?.response) {
            Notifications("No Server response", "error", "top-right");
          } else {
            Notifications("car not update ", "error", "top-right");
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
                    Edit Car
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
                <CommonSelect label="Category" name="category" >
                  <option value="">Select Category</option>
                  <option value="SEDAN" defaultValue={carData.category}>SEDAN</option>
                  <option value="SUV" defaultValue={carData.category}>SUV</option>
                  <option value="VAN" defaultValue={carData.category}>VAN</option>
                  <option value="other" defaultValue={carData.category}>other</option>
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
                <CommonInput
                  label="Passenger Capacity"
                  fieldRequired="*"
                  name="passengerCapacity"
                  type="text"
                />
              </Col>
              <Col md={6}>
                <label htmlFor="transmission" className="fw-bold" >Transmission</label>
                <CommonRadio
                  label="Auto"
                  name="transmission"
                  value="AUTO"
                  type="radio"
                  checked={carData.transmission}
                />
                <CommonRadio
                  label="Manual"
                  name="airCondition"
                  value="MANUAL"
                  type="radio"
                  checked={carData.airCondition}
                />
              </Col>
              <Col md={6}>
                <label htmlFor="airCondition" className="fw-bold" >Air Condition</label>
                <CommonRadio
                  label="Yes"
                  name="airCondition"
                  value={true}
                  type="radio"
                />
                <CommonRadio
                  label="No"
                  name="airCondition"
                  value={false}
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
                <CommonInput
                  label="Image"
                  fieldRequired="*"
                  name="image"
                  type="file"
                  value={undefined}
                  onChange={(event) => {
                    if (event.target.files[0]) {
                      setFieldValue("image", event.target.files[0]);
                    }
                    else {
                      setFieldValue("image", null);
                    }
                  }}
                />
              </Col>
              <Col sm={12}>
                <div className="text-center mt-5">
                  {loading ? <Spinner /> :
                    <button type="submit" className="form-btn">
                      save
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

export default EditCar;


