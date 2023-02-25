import *  as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Form, Formik, FormikHelpers } from 'formik';
import { CinemaCreateDTO } from "../../models/modelCinema";
import FormGroupText from '../../components/FormGroupText';
import Button from '../../components/Button';
import MapForm from '../../components/MapForm';
import { CoorDTO } from '../../models/modelCoor';

interface FormCinemaProps {
    model: CinemaCreateDTO
    onSubmit: (values: CinemaCreateDTO, actions: FormikHelpers<CinemaCreateDTO>) => void;
}

const FormCinema = (props: FormCinemaProps) => {
    const { model, onSubmit, } = props;
    const formatCoordenades = (): CoorDTO[] | undefined => {
        const { lat, lng } = model;
        if (lat && lng) {
            const response = [{ lat, lng, }];
            return response;
        }
        return undefined;
    }


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
                    <div style={{ marginBottom: '1rem' }}>
                        <MapForm valueLat="lat" valueLng="long" coor={formatCoordenades()} />
                    </div>
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
