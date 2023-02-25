import { Field, useFormikContext } from 'formik';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import './style.css'


interface FormGroupProps {
    value: string;
    label: string;
}

const FormGroupMarkDown = (props: FormGroupProps) => {

    const { value, label } = props;
    const { values } = useFormikContext<any>()

    return (
        <div className="form-group form-markdown">
            <div>
                <label>{label}</label>
                <div>
                    <Field name={value} as="textarea" className="form-textarea" />
                </div>
            </div>

            <div>
                <label>{label}{' (preview):'}</label>
                <div className="markdown-container">
                    <ReactMarkdown>
                        {values[value]}
                    </ReactMarkdown>
                </div>
            </div>

        </div>
    )
}

export default FormGroupMarkDown;