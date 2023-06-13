import React from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import Modal from "react-modal";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";

const SightingsPage = () => {
  //*------------------ constants ------------------*//
  const defaultCenter = {
    lat: 45.522,
    lng: -122.692,
  };

  //*------------------ state handlers ------------------*//
  const [sightings, setSightings] = React.useState([]);
  const [selectedSighting, setSelectedSighting] = React.useState(null);
  const [selectedStatus, setSelectedStatus] = React.useState("all");
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [adminResponse, setAdminResponse] = React.useState("");

  const [center, setCenter] = React.useState(defaultCenter);

  React.useEffect(() => {
    if (selectedSighting) {
      setAdminResponse("");
    }
  }, [selectedSighting]);

  //*------------------ API requests ------------------*//
  //* READ ALL
  React.useEffect(() => {
    axios
      .get("http://localhost:8000/api/sightings")
      .then((res) => {
        console.log("res.data", res.data);
        setSightings(res.data);
      })
      .catch((err) => console.log("Error fetching data: ", err));
  }, []);

  //* DELETE
  const deleteSighting = (id) => {
    axios
      .delete(`http://localhost:8000/api/sighting/${id}`)
      .then((res) => {
        console.log("res.data", res.data);
        setSightings(sightings.filter((sighting) => sighting._id !== id)); // Update state to remove deleted sighting
        setSelectedSighting(null); // Close modal window
      })
      .catch((err) => console.log("Error deleting sighting: ", err.message));
  };

  //* UPDATE
  const updateSighting = (id, adminResponse) => {
    axios
      .put(`http://localhost:8000/api/sighting/${id}`, { adminResponse })
      .then((res) => {
        console.log("res.data", res.data);
        setSightings(
          sightings.map((sighting) =>
            sighting._id === id ? res.data : sighting,
          ),
        ); // Update state to reflect changes in updated sighting
      })
      .catch((err) => console.log("Error updating sighting: ", err.message));
  };

  //*------------------ Google Map ------------------*//
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const mapStyles = {
    height: "50vh",
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

  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error obtaining location", error);
          // user declined to provide location, or another error occurred
          setCenter(defaultCenter);
        },
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setCenter(defaultCenter);
    }
  }, []);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  //*------------------ modal window ------------------*//

  const modalCustomStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)", // This will give you a dark overlay
    },
    content: {
      position: "relative", // This allows absolute positioning within the modal
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "#fff",
      overflow: "auto",
      WebkitOverflowScrolling: "touch",
      borderRadius: "4px",
      outline: "none",
      padding: "20px",
      width: "80%",
      height: "80%",
    },
  };

  return (
    <div>
      <h2>Sightings:</h2>
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
      <div>
        <label>
          <input
            type="radio"
            value="all"
            checked={selectedStatus === "all"}
            onChange={() => setSelectedStatus("all")}
          />
          All
        </label>
        <label>
          <input
            type="radio"
            value="verified"
            checked={selectedStatus === "verified"}
            onChange={() => setSelectedStatus("verified")}
          />
          Verified
        </label>
        <label>
          <input
            type="radio"
            value="pending"
            checked={selectedStatus === "pending"}
            onChange={() => setSelectedStatus("pending")}
          />
          Pending
        </label>
        <label>
          <input
            type="radio"
            value="reclassified"
            checked={selectedStatus === "reclassified"}
            onChange={() => setSelectedStatus("reclassified")}
          />
          Reclassified
        </label>
      </div>
      <Modal
        isOpen={selectedSighting !== null}
        onRequestClose={() => setSelectedSighting(null)}
        style={modalCustomStyles}
      >
        {selectedSighting && (
          <div>
            <button
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                zIndex: "100",
              }}
              onClick={() => setSelectedSighting(null)}
            >
              X
            </button>
            {selectedSighting.sighting.images.length > 0 && (
              <Carousel>
                {selectedSighting.sighting.images.map((image, index) => (
                  <div key={index}>
                    <img
                      src={`http://localhost:8000/uploads/${image}`}
                      alt={`sighting-${index}`}
                    />
                  </div>
                ))}
              </Carousel>
            )}
            <h2>{selectedSighting.sighting.species}</h2>
            <p>{selectedSighting.sighting.description}</p>
            <p>{selectedSighting.sighting.status}</p>
            <textarea
              placeholder="Enter admin response"
              value={adminResponse}
              onChange={(e) => setAdminResponse(e.target.value)}
            />
            <button
              onClick={() =>
                updateSighting(selectedSighting._id, adminResponse)
              }
            >
              Update admin response
            </button>
            <button onClick={() => deleteSighting(selectedSighting._id)}>
              Delete this sighting
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default SightingsPage;
