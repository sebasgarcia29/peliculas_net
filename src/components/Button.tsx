
interface PropsButton {
    children: React.ReactNode;
    onClick?: () => void;
    type: 'submit' | 'button';
    disabled: boolean
    className?: string
}

const Button = (props: PropsButton) => {
    return (
        <button
            className={props.className}
            type={props.type}
            onClick={props.onClick}
            aria-pressed={props.disabled}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}

Button.defaultProps = {
    type: 'button',
    disabled: false,
    className: 'btn btn-primary m-2',
};

export default Button;