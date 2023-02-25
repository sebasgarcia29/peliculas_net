import React from 'react'
import FormActors from './FormActors';

const createActor = () => {
    return (
        <>
            <div>createActor</div>
            <FormActors model={{
                name: '',
                dateOfBirth: undefined,
            }} onSubmit={(value) => console.log({ value })} />
        </>
    )
}

export default createActor;
