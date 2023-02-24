import { useParams } from 'react-router-dom';

const EditGender = () => {


    const { id }: any = useParams();

    return (
        <>
            <h3>EditGender</h3>
            <h4>{'The id for send is:' + id}</h4>
        </>
    )
}

export default EditGender;