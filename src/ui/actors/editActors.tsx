import React from 'react'
import FormActors from './FormActors';

const EditActors = () => {
    return (
        <>
            <div>EditActors</div>
            <FormActors model={{
                name: 'Jonh Snow',
                dateOfBirth: new Date('1995-11-29T00:00:00'),
                photoUrl: 'https://www.latercera.com/resizer/j7i4nLxOo0qzXj9xiExhE-aVeEo=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/BT5KMODEZ5FAPNDOJPE5UBQQHE.png',
                biography: `# John Snow
                The king of the **north**`
            }} onSubmit={(value) => console.log({ value })} />
        </>
    )
}

export default EditActors;