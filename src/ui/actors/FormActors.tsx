import *  as Yup from 'yup';
import { Form, Formik, FormikHelpers } from 'formik';
import { actorCreateDTO } from '../../models/modelsActors';
import FormGroupText from '../../components/FormGroupText';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import { FormGroupDate } from '../../components/FormGroupDate';
import FormGroupImage from '../../components/FormGroupImage';
import FormGroupMarkDown from '../../components/Markdown/FormGroupMarkDown';

interface FormActorsProps {
    model: actorCreateDTO;
    onSubmit: (values: actorCreateDTO, actions: FormikHelpers<actorCreateDTO>) => void;
}


const FormActors = (props: FormActorsProps) => {
    const { model, onSubmit } = props;
    return (
        <Formik
            initialValues={model}
            onSubmit={onSubmit}
            validationSchema={Yup.object({
                name: Yup.string().required('This field is required').firstLetterUpper(),
                dateOfBirth: Yup.date().nullable().required('This field is required'),
            })}
        >
            {(formikProps) => (
                <Form>
                    <FormGroupText label='name' value='name' />
                    <FormGroupDate label='Date of Birth' value="dateOfBirth" />
                    <FormGroupImage label='Foto' value='photo' imageURL={model.photoUrl} />
                    <FormGroupMarkDown label='Biography' value='biography' />
                    <Button disabled={formikProps.isSubmitting} type='submit'>
                        {'Save'}
                    </Button>
                    <Link className='btn btn-secondary' to={'/actors'}>{'Cancel'}</Link>
                </Form>
            )}
        </Formik>
    )
}

export default FormActors;
