import { Form, Formik, FormikHelpers } from 'formik';
import { CinemaCreateDTO } from "../../models/modelCinema";
import *  as Yup from 'yup';
import FormGroupText from '../../components/FormGroupText';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

interface FormCinemaProps {
    model: CinemaCreateDTO
    onSubmit: (values: CinemaCreateDTO, actions: FormikHelpers<CinemaCreateDTO>) => void;
}

const FormCinema = (props: FormCinemaProps) => {

    const { model, onSubmit } = props;

    return (
        <Formik
            initialValues={model}
            onSubmit={onSubmit}
            validationSchema={Yup.object({
                name: Yup.string().required('The name is required').firstLetterUpper(),
            })}
        >
            {(formikProps) => (
                <Form>
                    <FormGroupText label='name' value='name' />
                    <Button disabled={formikProps.isSubmitting} type='submit'>
                        {'Save'}
                    </Button>
                    <Link className='btn btn-secondart' to={'/cinemas'}></Link>
                </Form>
            )}

        </Formik>
    )
}

export default FormCinema;
