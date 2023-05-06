import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Formik, Form } from "formik";
import { CommonInput } from "../../components/bookingForm/commonInput";
import { CommonDatePicker } from "../../components/bookingForm/datePicker";
import { addDays } from 'date-fns'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addFormData } from "../../store/bookingFormSlice";
import * as Yup from "yup";




function BookingForm() {
  const [pickUpDate, setPickUpDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(addDays(new Date(), 1));
  const [pickUpTime, setPickUpTime] = useState(new Date());
  const [returnTime, setReturnTime] = useState(new Date());

  const dispatch = useDispatch();
  const formObj = useSelector((state) => state.formData);
  const formDataValues = formObj.formObj;
  const navigate = useNavigate();


  return (
    <Formik
      initialValues={{
        pickUpLocation: formDataValues ? formDataValues.pickUpLocation : "",
        pickUpDate: pickUpDate,
        pickUpTime: pickUpTime,
        returnLocation: formDataValues ? formDataValues.returnLocation : "",
        returnDate: returnDate,
        returnTime: returnTime,

      }}
      validationSchema={Yup.object({
        pickUpLocation: Yup.string().required("choose a pick up location"),
        pickUpDate: Yup.string().required("choose a pick up date"),
        pickUpTime: Yup.string().required("choose a pick up time"),
        returnLocation: Yup.string().required("choose a return location"),
        returnDate: Yup.string().required("choose a return date"),
        returnTime: Yup.string().required("choose a return time")
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          dispatch(addFormData(values));
          navigate('/vehicles')
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ errors, touched, setFieldValue }) => (
        <div className="bg-light mx-auto container  shadow-1  rounded-4">
          <div className="p-5">
            <Form id="booking-form">
              <Row className="g-4">
                <Col md={5} lg={6}>
                  <CommonInput
                    label="Pick Up Location"
                    fieldRequired=""
                    name="pickUpLocation"
                    type="text"
                    placeholder="Phase 1 DHA Lahore"
                  />
                </Col>
                <Col md={4}>

                  <CommonDatePicker
                    label="PickUp Date"
                    fieldRequired=""
                    showIcon
                    selected={pickUpDate}
                    onChange={(date) => {
                      setPickUpDate(date);
                      setFieldValue("pickUpDate", pickUpDate);
                    }}
                    minDate={new Date()}
                    maxDate={addDays(new Date(), 10)}

                    dateFormat="MM/dd/yyyy"
                  />

                </Col>
                <Col md={3} lg={2}>
                  <CommonDatePicker
                    label="PickUp Time"
                    fieldRequired=""
                    selected={pickUpTime}
                    onChange={(date) => {
                      setPickUpTime(date)
                      setFieldValue("pickUpTime", pickUpTime);
                    }}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                  />

                </Col>
              </Row>
              <Row className="g-4 mt-2">

                <Col md={5} lg={6}>
                  <CommonInput
                    label="Return Location"
                    fieldRequired=""
                    name="returnLocation"
                    type="text"
                    placeholder="Phase 1 DHA Lahore" />
                </Col>
                <Col md={4}>
                  <CommonDatePicker
                    label="Return Date"
                    fieldRequired=""
                    selected={returnDate}
                    onChange={(date) => {
                      setReturnDate(date)
                      setFieldValue("returnDate", returnDate);
                    }}
                    minDate={addDays(new Date(), 1)}
                    maxDate={addDays(new Date(), 20)}
                  />
                </Col>
                <Col md={3} lg={2}>
                  <CommonDatePicker
                    label="Return Time"
                    fieldRequired=""
                    selected={returnTime}
                    onChange={(date) => {
                      setReturnTime(date)
                      setFieldValue("returnTime", returnTime);
                    }}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                  />
                </Col>
                <Col sm={12} className="text-end">
                  <button className="form-btn" type="submit">Search</button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default BookingForm;
