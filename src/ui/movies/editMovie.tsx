import React from 'react'
import FormMovies from './FormMovies';
import { ModelGenderDTO } from '../../models/modelsGender';
import { cinemaDTO } from '../../models/modelCinema';

const EditMovie = () => {


    const gendersNotSelected: ModelGenderDTO[] = [
        { id: 2, name: 'Drama' },
    ];
    const gendersSelected: ModelGenderDTO[] = [
        { id: 3, name: 'Comedy' },
    ];
    const cinemasSelected: cinemaDTO[] = [
        { id: 1, name: 'Chipichape' },
        { id: 2, name: 'Unicentro' },
    ]
    const cinemasNotSelected: cinemaDTO[] = [
        { id: 3, name: 'Jardin Plaza' },
        { id: 4, name: 'Pacific' },
    ]

    return (
        <>
            <div>EditMovie</div>
            <FormMovies
                model={{
                    title: 'Sansa Stark',
                    inTheaters: true,
                    trailer: 'Trailer de Sansa Stark',
                    dateLaunch: new Date('1995-11-29T00:00:00'),
                    posterURL: 'https://media.revistavanityfair.es/photos/60e83dbb46da3cf1bc9fa06c/master/w_1600%2Cc_limit/177706.jpg'
                }}
                onSubmit={values => console.log({ values })}
                gendersNotSelected={gendersNotSelected}
                gendersSelected={gendersSelected}
                cinemaSelected={cinemasSelected}
                cinemaNotSelected={cinemasNotSelected}
            />
        </>
    )
}

export default EditMovie;