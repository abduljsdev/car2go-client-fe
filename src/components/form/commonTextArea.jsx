import React from "react";
import { useField } from "formik";
import './form.css'

const CommonTextArea = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <div className="mb-1">
                <label htmlFor={props.name}>
                    {label}
                </label>
            </div>
            <textarea className="contact-form-text-area w-100"  {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className=" error">{meta.error}</div>
            ) : null}
        </>
    );
};

export default CommonTextArea;