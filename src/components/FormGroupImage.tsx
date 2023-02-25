import { useFormikContext } from "formik";
import { useState } from "react";

interface FormGroupProps {
    value: string;
    label: string;
    imageURL: string;
}

const FormGroupImage = (props: FormGroupProps) => {

    const divStyle = { marginTop: '10px' };
    const imgStyle = { width: '250px' };

    const { value, imageURL } = props;

    const [imageBase64, setImageBase64] = useState<string | undefined>('');
    const [imageURLState, setImageURLState] = useState(imageURL)
    const { values } = useFormikContext<any>();

    const manageOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files) {
            const file = e.currentTarget.files[0];

            try {
                const response = await aBase64(file)
                setImageBase64(response)
                values[value] = response;
                setImageURLState('');
            } catch (error) {
                console.log(error);
            }
        }
    }


    const aBase64 = (file: File) => {
        return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = error => reject(error);
        });
    }


    return (
        <div className="form-group">
            <label htmlFor={value}>{props.label}</label>
            <div>
                <input
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    id={value}
                    name={value}
                    onChange={manageOnChange}
                />
                {imageBase64 ? (
                    <div style={divStyle}>
                        <div>
                            <img style={imgStyle} src={imageBase64} alt="imgselected" />
                        </div>
                    </div>
                ) : null}
                {imageURLState ? (
                    <div style={divStyle}>
                        <div>
                            <img style={imgStyle} src={imageURLState} alt="imgselected" />
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    )
}

FormGroupImage.defaultProps = {
    imageURL: '',
}

export default FormGroupImage;
