import React, { useEffect, useRef, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Formik, Form } from "formik";
import { CommonInput } from "../../components/bookingForm/commonInput";
import { CommonDatePicker } from "../../components/bookingForm/datePicker";
import { useSelector, useDispatch } from "react-redux";
import { unClickBtn } from '../../store/autoClickSlice';
import { addFormData } from '../../store/bookingFormSlice';
import { addDays } from 'date-fns'
import * as Yup from "yup";


function BookingForm() {
    const [pickUpDate, setPickUpDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState(addDays(new Date(), 1));
    const [pickUpTime, setPickUpTime] = useState(new Date());
    const [returnTime, setReturnTime] = useState(new Date());

    const submitButtonRef = useRef(null);
    const dispatch = useDispatch();
    const linkState = useSelector((state) => state.autoClickButton);
    const formObj = useSelector((state) => state.formData);
    const formDataValues = formObj.formObj;

    if (submitButtonRef.current && linkState.clickBtn === true) {
        submitButtonRef.current.click();
        dispatch(unClickBtn());
    }
    useEffect(() => {
        if (formDataValues.pickUpLocation !== undefined) {
            setPickUpDate(formDataValues.pickUpDate)
            setReturnDate(formDataValues.returnDate);
            setPickUpTime(formDataValues.pickUpTime);
            setReturnTime(formDataValues.returnTime);
        }
    }, [])


    return (
        <Formik
            enableReinitialize={true}
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
                // pickUpDate: Yup.string().required("choose a pick up date"),
                // pickUpTime: Yup.string().required("choose a pick up time"),
                // returnLocation: Yup.string().required("choose a return location"),
                // returnDate: Yup.string().required("choose a return date"),
                // returnTime: Yup.string().required("choose a return time")
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    dispatch(addFormData(values));
                    setSubmitting(false);
                }, 100);
            }}
        >
            {({ errors, touched, setFieldValue }) => (
                <div className="vehicles-booking-form">
                    <div className="vehicles-booking-section">
                        <Form id="booking-form">
                            <Row className="gy-4">
                                <Col lg={6}>
                                    <CommonInput
                                        label="PickUp Location"
                                        fieldRequired=""
                                        name="pickUpLocation"
                                        type="text"
                                        placeholder="Phase 1 DHA Lahore"
                                    />
                                </Col>
                                <Col lg={3}>

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
                                <Col lg={3}>

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
                                <Col lg={6}>
                                    <CommonInput
                                        label="Return Location"
                                        fieldRequired=""
                                        name="returnLocation"
                                        type="text"
                                        placeholder="Phase 1 DHA Lahore" />
                                </Col>
                                <Col lg={3}>

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
                                <Col lg={3}>
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
                                <Col>
                                    <button ref={submitButtonRef} type="submit" />
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
