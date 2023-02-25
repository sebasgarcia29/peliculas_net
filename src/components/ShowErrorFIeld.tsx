
interface InterfaceShowError {
    error: string;
}

const ShowErrorField = (props: InterfaceShowError) => {
    const { error } = props;
    return (
        <div className='text-danger'>{error}</div>
    )
}

export default ShowErrorField;