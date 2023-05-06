import React from "react";
import { Form } from "react-bootstrap";
import "./form.css"

import { useField } from "formik";

export const CommonInput = ({ label, fieldRequired, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <Form.Label htmlFor={props.id || props.name} style={{ fontWeight: "500" }}>
                {label}
                <span className="error">{fieldRequired}</span>
            </Form.Label>

            <Form.Control className="w-100 cartogo-form" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className=" error">{meta.error}</div>
            ) : null}
        </>
    );
};
