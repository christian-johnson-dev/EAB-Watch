import React from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";

const MapWithMarkers = ({
  center,
  sightings,
  selectedStatus,
  setSelectedSighting,
}) => {
  const mapStyles = {
    height: "70vh",
    width: "100%",
  };
  const mapOptions = {
    styles: [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
    ],
  };

  return (
    <GoogleMap
      zoom={11}
      center={center}
      mapContainerStyle={mapStyles}
      options={mapOptions}
    >
      {sightings
        .filter(
          (sighting) =>
            selectedStatus === "all" ||
            sighting.sighting.status.toLowerCase() === selectedStatus,
        )
        .map((sighting) => (
          <MarkerF
            key={sighting._id}
            position={{
              lat: sighting.sighting.latitude,
              lng: sighting.sighting.longitude,
            }}
            icon={{
              url:
                sighting.sighting.status.toLowerCase() === "verified"
                  ? "/green_pin.svg"
                  : sighting.sighting.status.toLowerCase() === "pending"
                  ? "/orange_pin.svg"
                  : sighting.sighting.status.toLowerCase() === "reclassified"
                  ? "/grey_pin.svg"
                  : null,
              scaledSize: new window.google.maps.Size(35, 35),
            }}
            onClick={() => {
              setSelectedSighting(sighting);
            }}
          />
        ))}
    </GoogleMap>
  );
};

export default MapWithMarkers;
