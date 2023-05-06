import { useField } from "formik";
import "./form.css";
export const CommonRadio = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="mt-3">
            <input className="radio-Button " {...field} {...props} />
            <label className="ms-3" style={{ marginTop: "-3px" }} htmlFor={props.id || props.name}>{label}</label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};