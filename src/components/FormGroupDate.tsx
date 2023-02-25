import { useFormikContext } from "formik";
import ShowErrorField from "./ShowErrorFIeld";
import moment from "moment";


interface FormGroupDateProps {
    value: string;
    label: string;
}

export const FormGroupDate = (props: FormGroupDateProps) => {

    const { values, validateForm, touched, errors } = useFormikContext<any>();

    const { value, label } = props;

    return (
        <div className="form-groups">
            <label htmlFor={value}>{label}</label>
            <input
                type="date"
                className="form-control"
                id={value}
                name={value}
                defaultValue={values[value] && moment(values[value].toLocaleDateString('en-CA')).format('YYYY-MM-DD')}
                onChange={(e) => {
                    const date = new Date(e.currentTarget.value + 'T00:00:00');
                    values[value] = date
                    validateForm();
                }}
            />
            {(touched[value] && errors[value]) ? (
                <ShowErrorField error={errors[value] + ''} />
            ) : null}
        </div>
    )
}
