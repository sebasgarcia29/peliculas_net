import React from 'react'
import FormMovies from './FormMovies';
import { ModelGenderDTO } from '../../models/modelsGender';
import { cinemaDTO } from '../../models/modelCinema';

const createMovie = () => {

    const genders: ModelGenderDTO[] = [
        { id: 1, name: 'Action' },
        { id: 2, name: 'Drama' },
        { id: 3, name: 'Comedy' },
        { id: 4, name: 'Romance' },
    ];

    const cinemas: cinemaDTO[] = [
        { id: 1, name: 'Chipichape' },
        { id: 2, name: 'Unicentro' },
        { id: 3, name: 'Jardin Plaza' },
        { id: 4, name: 'Pacific' },
    ]

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
                cinemaSelected={[]}
                cinemaNotSelected={cinemas}
                actoresSelectedProps={[]}
            />
        </>
    )
}

export default createMovie;
