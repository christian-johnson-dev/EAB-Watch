import React from "react";
import { useLoadScript } from "@react-google-maps/api";
import axios from "axios";
import StatusToggle from "../components/SightingsMap/StatusToggle";
import MapWithMarkers from "../components/SightingsMap/MapWithMarkers";
import SightingModal from "../components/SightingsMap/SightingModal";
import { Link } from "react-router-dom";

// * options is an array of objects that will be used to populate the status filter dropdown
const options = [
  { id: 1, name: "All", className: "select-filter bg-light text-dark" },
  {
    id: 2,
    name: "Verified",
    className: "select-filter bg-verified text-light",
  },
  { id: 3, name: "Pending", className: "select-filter bg-pending text-light" },
  {
    id: 4,
    name: "Reclassified",
    className: "select-filter bg-reclassified text-white",
  },
];

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
  const [adminResponse, setAdminResponse] = React.useState("");

  const [center, setCenter] = React.useState(defaultCenter);

  const [selectedOption, setSelectedOption] = React.useState(options[0]);

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

  return (
    <div>
      <div className="relative flex flex-col">
        <MapWithMarkers
          center={center}
          sightings={sightings}
          selectedStatus={selectedStatus}
          setSelectedSighting={setSelectedSighting}
        />
        <div className="container mx-auto flex absolute md:bottom-0 bottom-[-60px] items-end justify-center pr-2">
          <StatusToggle
            selectedStatus={selectedStatus}
            setSelectedStatus={setSelectedStatus}
            options={options}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </div>
      </div>
      <div className=" flex justify-center px-[10%] pt-16 md:pt-6">
        <Link
          to={"/report"}
          className="bottom-report-button "
        >
          Report Sighting
        </Link>
      </div>

      <SightingModal
        selectedSighting={selectedSighting}
        setSelectedSighting={setSelectedSighting}
        adminResponse={adminResponse}
        setAdminResponse={setAdminResponse}
        updateSighting={updateSighting}
        deleteSighting={deleteSighting}
      />
    </div>
  );
};

export default SightingsPage;
