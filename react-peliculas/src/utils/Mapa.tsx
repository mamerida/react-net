import {MapContainer, TileLayer ,useMapEvent,Marker} from "react-leaflet"
import L from "leaflet"
import icon from "leaflet/dist/images/marker-icon.png"
import iconShadow from "leaflet/dist/images/marker-shadow.png"
import 'leaflet/dist/leaflet.css'
import {coordenadaDTO} from './../utils/coordenadas.model'
import { useState } from "react"

let DefaultIcon = L.icon({
        iconUrl:icon,
        shadowUrl:iconShadow,
        iconAnchor:[16,37] 

})

L.Marker.prototype.options.icon= DefaultIcon; 

export default function Mapa(props:MapaProps){
    const[coordenadas,setCoordenadas] = useState<coordenadaDTO[]>(props.coordenadas)
    return(
        <MapContainer
            center ={[-32.926668, -68.820631]} zoom = {18} style={{height:props.height}}
        >
            <TileLayer
                attribution="Mario Merida"
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <ClickMapa setPunto={coordenadas =>{
                setCoordenadas([coordenadas]);
                props.manejarClickMapa(coordenadas);
            }}/>
            {coordenadas.map(coordenadas => <Marcador key={coordenadas.lat + coordenadas.lng}
                {...coordenadas}
            />)}
        </MapContainer>
    )
}

function ClickMapa(props:clickMapaProps){
    useMapEvent("click" , e =>{
        props.setPunto({lat : e.latlng.lat, lng: e.latlng.lng})
    })
    return null;
}

function Marcador(props:coordenadaDTO){
    return(
        <Marker position={[props.lat,props.lng]}/>
    )
}

interface clickMapaProps{
    setPunto(coordenadas:coordenadaDTO):void;
} 

interface MapaProps{
    height:string;
    coordenadas:coordenadaDTO[];
    manejarClickMapa(coordenadas:coordenadaDTO):void
}
Mapa.defaultProps={
    height:'500px'
}
