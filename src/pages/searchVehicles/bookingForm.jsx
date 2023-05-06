import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Formik, Form } from "formik";
import { CommonInput } from "../../components/bookingForm/commonInput";
import * as Yup from "yup";
import { CommonDatePicker } from "../../components/bookingForm/datePicker";
import { addDays } from 'date-fns'


function BookingForm() {
    const [pickUpDate, setPickUpDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState(addDays(new Date(), 1));
    const [pickUpTime, setPickUpTime] = useState(new Date());
    const [returnTime, setReturnTime] = useState(new Date());


    return (
        <Formik
            initialValues={{
                pickUpLocation: "",
                pickUpDate: "",
                pickUpTime: "",
                returnLocation: "",
                returnDate: "",
                returnTime: "",

            }}
            validationSchema={Yup.object({
                pickUpLocation: Yup.string().required("choose a pick up location"),
                returnLocation: Yup.string().required("choose a return location"),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ errors, touched, setFieldValue }) => (
                <div className="vehicles-booking-form">
                    <div className="container py-4">
                        <Form id="booking-form">
                            <Row className="g-4">
                                <Col lg={{ span: 4, offset: 2 }}>
                                    <CommonInput
                                        label="Pick Up Location"
                                        fieldRequired=""
                                        name="pickUpLocation"
                                        type="text"
                                        placeholder="Phase 1 DHA Lahore"
                                    />
                                </Col>
                                <Col lg={2}>

                                    <CommonDatePicker
                                        label="Pick Up Date"
                                        fieldRequired=""
                                        showIcon
                                        selected={pickUpDate}
                                        onChange={(date) => setPickUpDate(date)}
                                        minDate={new Date()}
                                        maxDate={addDays(new Date(), 10)}
                                    />

                                </Col>
                                <Col lg={2}>

                                    <CommonDatePicker
                                        label="Pick Up Date"
                                        fieldRequired=""
                                        selected={pickUpTime}
                                        onChange={(date) => setPickUpTime(date)}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={15}
                                        timeCaption="Time"
                                        dateFormat="h:mm aa"
                                    />

                                </Col>
                            </Row>
                            <Row className="g-4 mt-2">
                                <Col lg={{ span: 4, offset: 2 }}>
                                    <CommonInput
                                        label="Return Location"
                                        fieldRequired=""
                                        name="returnLocation"
                                        type="text"
                                        placeholder="Phase 1 DHA Lahore" />
                                </Col>
                                <Col lg={2}>

                                    <CommonDatePicker
                                        label="Return Date"
                                        fieldRequired=""
                                        selected={returnDate}
                                        onChange={(date) => setReturnDate(date)}
                                        minDate={addDays(new Date(), 1)}
                                        maxDate={addDays(new Date(), 20)}
                                    />
                                </Col>
                                <Col lg={2}>
                                    <CommonDatePicker
                                        label="Return Time"
                                        fieldRequired=""
                                        selected={returnTime}
                                        onChange={(date) => setReturnTime(date)}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={15}
                                        timeCaption="Time"
                                        dateFormat="h:mm aa"
                                    />
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
