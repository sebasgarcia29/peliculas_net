
interface PropsButton {
    children: React.ReactNode;
    onClick: () => void;
}

export const Button = (props: PropsButton) => {
    return (
        <button
            type='button'
            className='btn btn-primary mt-2'
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}
