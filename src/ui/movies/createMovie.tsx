import React from 'react'
import FormMovies from './FormMovies';
import { ModelGenderDTO } from '../../models/modelsGender';

const createMovie = () => {


    const genders: ModelGenderDTO[] = [
        { id: 1, name: 'Action' },
        { id: 2, name: 'Drama' },
        { id: 3, name: 'Comedy' },
        { id: 4, name: 'Romance' },
    ];

    return (
        <>
            <div>createMovie</div>
            <FormMovies
                model={{
                    title: '',
                    inTheaters: false,
                    trailer: '',
                }}
                onSubmit={values => console.log({ values })}
                gendersNotSelected={genders}
                gendersSelected={[]}
            />
        </>
    )
}

export default createMovie;
