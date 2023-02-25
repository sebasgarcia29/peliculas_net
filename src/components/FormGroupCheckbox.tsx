import { Field } from 'formik';

interface FormGroupCheckboxProps {
    label: string;
    value: string;
}

const FormGroupCheckbox = (props: FormGroupCheckboxProps) => {

    const { label, value } = props;

    return (
        <div className="form-group form-check">
            <Field className="form-check-input" id={value} name={value} type="checkbox" />
            <label htmlFor={value}>{label}</label>
        </div>
    )
}

export default FormGroupCheckbox;