import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./Map.module.css";
const Maps = () => {
  return (
    <>
      <div className={styles.mapsContainer}>
        <MapContainer
          center={[-37.3287, -59.1369]}
          zoom={13}
          style={{ height: "300px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[-37.3287, -59.1369]}>
            <Popup>
              Estamos ubicados aquí
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
};

export default Maps;
