import React from 'react'
import FormCinema from './FormCinema';

const createCinema = () => {
    return (
        <>
            <div>createCinema</div>
            <FormCinema
                model={{
                    name: ''
                }}
                onSubmit={(value) => console.log(value)}
            />
        </>
    )
}

export default createCinema;
