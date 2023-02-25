import React from 'react'
import FormCinema from './FormCinema';

const EditCinema = () => {
    return (
        <>
            <div>EditCinema</div>
            <FormCinema
                model={{
                    name: 'Casa Sebas & Johana',
                    lat: 3.404571832371389,
                    lng: -76.52799099683762
                }}
                onSubmit={value => console.log({ value })}
            />
        </>
    )
}

export default EditCinema;