import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const Step4 = ({ formData, setFormData, previous, next, setCurrentStep }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [center, setCenter] = React.useState(null);

  React.useEffect(() => {
    console.log("isLoaded:", isLoaded);
    console.log("loadError:", loadError);
    console.log("center:", center);
  }, [isLoaded, loadError, center]);

  React.useEffect(() => {
    console.log(
      "Latitude and Longitude on page load: ",
      formData.latitude + ", " + formData.longitude,
    );
    const storedLat = localStorage.getItem("latitude");
    const storedLng = localStorage.getItem("longitude");

    if (storedLat && storedLng) {
      setCenter({ lat: parseFloat(storedLat), lng: parseFloat(storedLng) });
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);

  React.useEffect(() => {
    if (center) {
      console.log(
        "Latitude and Longitude on map move: ",
        center.lat + ", " + center.lng,
      );
      localStorage.setItem("latitude", center.lat);
      localStorage.setItem("longitude", center.lng);
    }
  }, [center]);

  const handleMarkerDragEnd = (event) => {
    console.log(
      "Latitude and Longitude on marker drag end: ",
      event.latLng.lat() + ", " + event.latLng.lng(),
    );
    setCenter({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });

    setFormData({
      ...formData,
      latitude: event.latLng.lat(),
      longitude: event.latLng.lng(),
    });
  };

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  const goToSixthStep = () => {
    setCurrentStep(6);
  };

  return (
    <div>
      {center && (
        <GoogleMap
          id="map"
          mapContainerStyle={mapContainerStyle}
          zoom={17}
          center={center}
        >
          {center && (
            <Marker
              position={center}
              draggable={true}
              onDragEnd={handleMarkerDragEnd}
            />
          )}
        </GoogleMap>
      )}

      <button onClick={goToSixthStep}>Use Drop Pin</button>
      <p onClick={next}>I'll enter the location manually</p>

      <button onClick={previous}>Previous</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default Step4;
