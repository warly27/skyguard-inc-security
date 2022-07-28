import React, { useState} from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import logo from '../../assets/images/skyguard-logo.png'

const containerStyle = {
    width: '100%',
    height: '500px'
  };
  
  const center = {
    lat: 14.3249,
    lng: 121.086617
  };


const Map = () => {

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY
    })

    if(!isLoaded) return <div>Loading .......</div>

    return (
        <div className="container-fluid">
            <div className="map">
                <LoadMap />
            </div>
        </div>
    )
}

const LoadMap = () => {

    const [showInfoWindow, activeMarker] = useState(false)

    return (
        <div id="map" className="block mapBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Google Map location</h2>
                </div>
                <GoogleMap zoom={17} center={center} mapContainerStyle={containerStyle}>
                        <Marker position={center} title="Skyguard Security Agency"  icon={{ url: logo, scaledSize: new window.google.maps.Size(50, 50)}} onClick={()=> activeMarker(!showInfoWindow)} />
                        {showInfoWindow && <InfoWindow position={center}>
                            <div className='our-address'>
                                <h3>Skyguard Security Agency Inc.</h3>
                                <small>UNIT 11 4/F EXANNE BLDG. </small><br />
                                <small>ONE ASIA BUSINESS CENTER SAN ANTONIO</small><br/>
                                <small> BIÑAN CITY, 4024</small><br />
                                <a href="https://www.google.com/maps/search/EXANNE+BLDG.,+ONE+ASIA+BUSINESS+CENTER+SAN+ANTONIO,+BI%C3%91AN+CITY/@14.3254311,121.0868571,18.05z?hl=en">View on google maps</a>
                            </div>
                        </InfoWindow>}
                </GoogleMap>
            </div>
        </div>
    )

}

export default Map