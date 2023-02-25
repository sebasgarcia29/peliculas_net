// import { useParams } from 'react-router-dom';
import FormGender from './FormGender';

const EditGender = () => {


    // const { id }: any = useParams();

    return (
        <>
            <h3>EditGender</h3>
            {/* <h4>{'The id for send is:' + id}</h4> */}
            <FormGender
                model={{ name: 'Accion' }}
                onSubmit={async (value) => {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    console.log({ value });
                }}
            />
        </>
    )
}

export default EditGender;