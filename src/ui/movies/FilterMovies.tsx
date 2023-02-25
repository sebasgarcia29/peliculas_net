import { Form, Formik, Field } from 'formik';
import { ModelGenderDTO } from '../../models/modelsGender';
import Button from '../../components/Button';

interface FilterMoviesFrom {
    title: string;
    genderId: number;
    isNextPremiere: boolean;
    onCinema: boolean;
}

const FilterMovies = () => {


    const initialValue: FilterMoviesFrom = {
        genderId: 0,
        isNextPremiere: false,
        onCinema: false,
        title: ""
    }

    const genders: ModelGenderDTO[] = [
        { id: 1, name: "Action" },
        { id: 2, name: "Comedy" },
    ];

    return (

        <Formik
            initialValues={initialValue}
            onSubmit={values => console.log({ values })}
        >
            {(formikProps) => (
                <Form>
                    <h3>FilterMovies</h3>
                    <div className="form-inline">
                        <div className="form-group mb-2">
                            <label htmlFor="title" className="sr-only">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Title of movie"
                                {...formikProps.getFieldProps("title")}
                            />
                        </div>
                        <div className="form-group mx-sm-3 mb-2">
                            <select className="form-control"
                                {...formikProps.getFieldProps("genderId")}
                            >
                                <option value="0"> {'-- Select a gender --'}</option>
                                {genders.map(gender =>
                                    <option key={gender.id} value={gender.id}>
                                        {gender.name}
                                    </option>)}
                            </select>
                        </div>
                        <div className="form-group mx-sm-3 mb-2">
                            <Field className="form-check-input" id="isNextPremiere" type="checkbox" name="isNextPremiere" />
                            <label className="form-check-label" htmlFor="isNextPremiere">Next premiere</label>
                        </div>
                        <div className="form-group mx-sm-3 mb-2">
                            <Field className="form-check-input" id="onCinema" type="checkbox" name="onCinema" />
                            <label className="form-check-label" htmlFor="onCinema">On cinema</label>
                        </div>
                        <Button
                            className="btn btn-primary mb-2 mx-sm-3"
                            onClick={() => formikProps.submitForm()}
                        >
                            Filtrar
                        </Button>
                        <Button
                            className="btn btn-danger mb-2 mx-sm-3"
                            onClick={() => formikProps.setValues(initialValue)}
                        >
                            Clear
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>

    )
}

export default FilterMovies;