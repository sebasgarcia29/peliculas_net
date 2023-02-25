import { ErrorMessage, Field } from "formik";
import ShowErrorFIeld from "./ShowErrorFIeld";

interface InterfaceFromGroup {
    value: string;
    label?: string;
    placeholder?: string;
}


const FormGroupText = (props: InterfaceFromGroup) => {
    const { value, label, placeholder } = props;
    return (
        <div className='form-group'>
            {label ? <label htmlFor={value}>{label}</label> : null}
            <Field name={value} className="form-control" placeholder={placeholder} />
            <ErrorMessage name={value} component='div' className='invalid-feedback' >
                {msg => <ShowErrorFIeld error={msg} />}
            </ErrorMessage>
        </div>
    )
}

export default FormGroupText;