import { MapContainer, TileLayer, useMapEvent, Marker } from "react-leaflet";
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import { CoorDTO } from "../models/modelCoor";
import { useState } from 'react';


interface MapProps {
    height: string;
    coor: CoorDTO[];
    manageClickMap(coor: CoorDTO): void;
}

interface clickMapProps {
    setPoint(coord: CoorDTO): void;
}

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [16, 37]
})

L.Marker.prototype.options.icon = DefaultIcon;


const Map = (props: MapProps) => {

    const { height, coor, manageClickMap } = props;

    const [coordinates, setCoordinates] = useState<CoorDTO[]>(coor)

    const ClickMap = (props: clickMapProps) => {
        useMapEvent<"click">('click', (coor) => {
            props.setPoint({ lat: coor.latlng.lat, lng: coor.latlng.lng });
        });
        return null;
    }

    const MarkerComponent = ({ lat, lng }: CoorDTO, index: number) => <Marker key={index} position={[lat, lng]}></Marker>


    return (
        <MapContainer center={[3.4042405, -76.5278158]} zoom={14} style={{ height }}>
            <TileLayer attribution="Sebas" url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <ClickMap setPoint={(coorSending) => {
                setCoordinates([coorSending]);
                manageClickMap(coorSending);
            }} />
            {coordinates.map((coor, index) => MarkerComponent(coor, index))}
        </MapContainer>
    )
}

Map.defaultProps = {
    height: '500px',
    coor: [],
}

export default Map;
