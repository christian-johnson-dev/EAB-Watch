import React from "react";
import FormNavButtons from "../Shared/FormNavButtons";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { Link } from "react-router-dom";

const Step4 = ({
  formData,
  setFormData,
  summary,
  returning,
  currentStep,
  next,
  previous,
}) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const mapStyles = {
    height: "45vh",
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
      <div className="card">
        <Link
          to="/sightings"
          className="card-cancel"
        >
          Cancel
        </Link>
        <div className="heading-container">
          <p className="step-heading">Section 3 of 5:</p>
          <h3 className="form-heading">
            Location <span>map input</span>
          </h3>
        </div>
        <div className="content-container">
          <GoogleMap
            className=""
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
        </div>

        <FormNavButtons
          previous={previous}
          next={next}
          returning={returning}
          summary={summary}
          currentStep={currentStep}
        />
      </div>
    </div>
  );
};

export default Step4;
