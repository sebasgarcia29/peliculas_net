import { withRouter } from 'react-router-dom';
import FormGender from './FormGender';

const CreateGender = () => {

    return (
        <>
            <h3>CreateGender</h3>
            <FormGender
                model={{ name: '' }}
                onSubmit={async (value) => {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    console.log({ value });
                }}
            />
        </>
    )
}

export default withRouter(CreateGender);