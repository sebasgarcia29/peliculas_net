import { Link } from 'react-router-dom';
import { Formik, Form, FormikHelpers } from 'formik';
import *  as Yup from 'yup';
import FormGroupText from '../../components/FormGroupText';
import { ModelGender } from '../../models/modelsGender';
import Button from '../../components/Button';

interface InterfaceFormGender {
    model: ModelGender
    onSubmit: (values: ModelGender, action: FormikHelpers<ModelGender>) => void
}

const FormGender = (props: InterfaceFormGender) => {
    const { onSubmit, model } = props;
    return (
        <Formik
            initialValues={model}
            // onSubmit={async values => {
            //     await new Promise(resolve => setTimeout(resolve, 3000));
            //     console.log({ values })
            // }}
            onSubmit={onSubmit}
            validationSchema={Yup.object({
                name: Yup.string().required('This field is required').firstLetterUpper()
            })}
        >
            {(formikProps) => (
                <Form>
                    <FormGroupText value='name' label='Name' placeholder='Enter name Gender' />
                    <Button disabled={formikProps.isSubmitting} type="submit">{'Create gender'}</Button>
                    <Link className='btn btn-secondary mt-2' to={'/genders'}>{'Cancel'}</Link>
                </Form>
            )}
        </Formik>
    )
}

export default FormGender;
