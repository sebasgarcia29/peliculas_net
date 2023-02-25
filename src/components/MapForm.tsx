import { useFormikContext } from 'formik';
import { CoorDTO } from "../models/modelCoor";
import Map from "./Map";

interface MapFormProps {
    coor: CoorDTO[];
    valueLat: string;
    valueLng: string;
}

const MapForm = (props: MapFormProps) => {

    const { coor, valueLat, valueLng } = props;

    const { values } = useFormikContext<any>()

    const updateField = (coordenades: CoorDTO) => {
        values[valueLat] = coordenades.lat;
        values[valueLng] = coordenades.lng;
    }

    return (
        <Map
            manageClickMap={updateField}
            coor={coor}
        />
    )
}

MapForm.defaultProps = {
    coor: [],
}

export default MapForm;
