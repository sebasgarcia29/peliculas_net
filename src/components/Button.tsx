import { ReactElement } from "react";

interface PropsButton {
    children: React.ReactNode;
}

export const Button = (props: PropsButton) => {
    return (
        <button type='button' className='btn btn-primary mt-2'>{
            props.children
        }</button>
    )
}
