import { useState } from 'react';
import *  as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Formik, FormikHelpers, Form } from 'formik';
import { InterfaceMovieCreateDTO } from '../../models/InterfaceMovie';
import FormGroupText from '../../components/FormGroupText';
import FormGroupCheckbox from '../../components/FormGroupCheckbox';
import { FormGroupDate } from '../../components/FormGroupDate';
import FormGroupImage from '../../components/FormGroupImage';
import Button from '../../components/Button';
import MultipleSelector, { ModelselectorMultiple } from '../../components/MultipleSelector/MultipleSelector';
import { ModelGenderDTO } from '../../models/modelsGender';
import { cinemaDTO } from '../../models/modelCinema';



interface FormMoviesProps {
    model: InterfaceMovieCreateDTO;
    onSubmit(values: InterfaceMovieCreateDTO, actions: FormikHelpers<InterfaceMovieCreateDTO>): void;
    gendersSelected: ModelGenderDTO[];
    gendersNotSelected: ModelGenderDTO[];
    cinemaSelected: cinemaDTO[];
    cinemaNotSelected: cinemaDTO[];

}

const FormMovies = (props: FormMoviesProps) => {

    const {
        model,
        onSubmit,
        gendersSelected,
        gendersNotSelected,
        cinemaNotSelected,
        cinemaSelected,
    } = props;


    const mapData = (data: ModelGenderDTO[]): ModelselectorMultiple[] => {
        return data.map((item) => ({ key: item.id, value: item.name }));
    }

    const [gendersSelecteds, setGendersSelecteds] = useState(mapData(gendersSelected));
    const [gendersNotSelecteds, setGendersNotSelecteds] = useState(mapData(gendersNotSelected));
    const [cinemaSelecteds, setCinemaSelecteds] = useState(mapData(cinemaNotSelected))
    const [cinemaNotSelecteds, setCinemaNotSelecteds] = useState(mapData(cinemaSelected))


    return (
        <Formik
            initialValues={model}
            onSubmit={(values, actions) => {
                values.gendersIds = gendersSelecteds.map((item) => item.key);
                values.cinemasIds = cinemaSelecteds.map((item) => item.key);
                onSubmit(values, actions);
            }}
            validationSchema={Yup.object({
                title: Yup.string().required('The title is required').firstLetterUpper(),
            })}
        >
            {(formikProps) => (
                <Form>
                    <FormGroupText label='title' value='title' />
                    <FormGroupCheckbox label='En cine' value='inTheaters' />
                    <FormGroupText label='Trailer' value='trailer' />
                    <FormGroupDate label='Fecha lanzamiento' value='dateLaunch' />
                    <FormGroupImage label='Poster' value='poster' imageURL={model.posterURL} />

                    <div className='form-group'>
                        <label>Genders</label>
                        <MultipleSelector
                            selected={gendersSelecteds}
                            noSelected={gendersNotSelecteds}
                            onChange={(selected, notSelected) => {
                                setGendersSelecteds(selected);
                                setGendersNotSelecteds(notSelected);
                            }}
                        />
                    </div>

                    <div className='form-group'>
                        <label>Cinemas</label>
                        <MultipleSelector
                            selected={cinemaSelecteds}
                            noSelected={cinemaNotSelecteds}
                            onChange={(selected, notSelected) => {
                                setCinemaSelecteds(selected);
                                setCinemaNotSelecteds(notSelected)
                            }}
                        />
                    </div>



                    <Button disabled={formikProps.isSubmitting} type='submit'>
                        {'Create'}
                    </Button>
                    <Link className='btn btn-secondary' to="/">{'Cancel'}</Link>
                </Form>
            )}

        </Formik>
    )
}

export default FormMovies;