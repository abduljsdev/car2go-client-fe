import { useField } from "formik";

export const CommonSelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div>
            <div className="mb-1">
                <label htmlFor={props.id || props.name}>{label}</label>
            </div>
            <select className="w-100 booking-form car-category" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};