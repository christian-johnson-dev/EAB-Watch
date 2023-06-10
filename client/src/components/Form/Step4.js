import React from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

const Step4 = ({ formData, setFormData, next, previous }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const mapStyles = {
    height: "50vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 45.53077016741708,
    lng: -122.85460515594484,
  };

  const handleMarkerDragEnd = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();

    setFormData({
      ...formData,
      latitude: lat,
      longitude: lng,
    });
  };

  React.useEffect(() => {
    if (!formData.latitude && !formData.longitude) {
      // Check if latitude and longitude are not already set
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            setFormData({
              ...formData,
              latitude: lat,
              longitude: lng,
            });
          },
          (error) => {
            console.error("Error getting current position:", error);
          },
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    }
  }, [formData, setFormData]);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";
  return (
    <div>
      <h2>Where did you make this sighting?</h2>
      <GoogleMap
        zoom={17}
        center={{
          lat: formData.latitude || defaultCenter.lat,
          lng: formData.longitude || defaultCenter.lng,
        }}
        mapContainerStyle={mapStyles}
      >
        <MarkerF
          position={{
            lat: formData.latitude || defaultCenter.lat,
            lng: formData.longitude || defaultCenter.lng,
          }}
          draggable={true}
          onDragEnd={handleMarkerDragEnd}
        />
      </GoogleMap>
      {/* Display coordinates */}
      <p>Latitude: {formData.latitude}</p>
      <p>Longitude: {formData.longitude}</p>
      <button onClick={next}>Next</button>
      <button onClick={previous}>Previous</button>
    </div>
  );
};

export default Step4;
