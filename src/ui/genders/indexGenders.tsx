
import { Link } from 'react-router-dom'

const IndexGenders = () => {

    // useEffect(() => {
    //     axios.get('https://localhost:712/api/genders')
    //         .then((response: AxiosResponse<InterfaceGender>) => {
    //             console.log(response.data);
    //         });
    // }, [])


    return (
        <>
            <h3>Index Genders</h3>
            <Link to={"genders/create"}> Create gender </Link>
        </>
    )
}

export default IndexGenders;