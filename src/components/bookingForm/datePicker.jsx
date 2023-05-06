import React from "react";
import DatePicker from "react-datepicker";
import "./bookingForm.css"

export const CommonDatePicker = ({ label, fieldRequired, ...props }) => {
    return (
        <>
            <label htmlFor={props.id || props.name} style={{ fontWeight: "500" }}>
                {label}
                <span className="error">{fieldRequired}</span>
            </label>

            <DatePicker className="w-100 booking-form"{...props} />
        </>
    );
};
