import React from "react";
import {GoogleMap,useLoadScript} from "@react-google-maps/api";
import { fakeData } from "../../fakeData/fakeData";

const libraries = ["places"];
const mapContainerStyle = {
  width: "50wh",
  height: "64vh",
  borderRadius: "15px",
};


export default function SpotMap(props) {
  const id = props.id;

  const destination = fakeData.find((pd) => pd.id.toString() === id.toString());
  console.log(destination.lat, destination.lng);

  const center = {
    lat: 21.43392,
    lng: 91.98703,
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAqU1bJBpPmEgYPuE29AB_fmqFw28NeHmQ",
    libraries,
  });

  if (loadError) return "Error Loading Maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={16}
        center={center}
      ></GoogleMap>
    </div>
  );
}
