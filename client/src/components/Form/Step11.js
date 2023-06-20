import React from "react";
import axios from "axios";
import FormNavButtons from "../Shared/FormNavButtons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Step11 = ({
  formData,
  previous,
  setCurrentStep,
  currentStep,
  summary,
  returning,
  setReturning,
}) => {
  const navigate = useNavigate();
  //state for error messages
  const [firstNameError, setFirstNameError] = React.useState("");
  const [lastNameError, setLastNameError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");

  const handleSubmit = async () => {
    // Clear any previous error messages
    setFirstNameError("");
    setLastNameError("");
    setEmailError("");

    let formIsValid = true; //prove me wrong!

    // Validate first name
    if (!formData.firstName.trim()) {
      setFirstNameError("First Name required.");
      formIsValid = false; // your'e wrong!
    }

    // Validate last name
    if (!formData.lastName.trim()) {
      setLastNameError("Last Name required.");
      formIsValid = false; // your'e wrong!
    }

    // Validate email
    if (!formData.email) {
      setEmailError("Email required.");
      formIsValid = false; // your'e wrong!
    }

    try {
      //* This is where the front end form data (flat) is converted to the back end db schema (nested) and is sent to the server.
      //! Keep 'data' here within the submit function unless it is needed elsewhere.

      const data = new FormData();
      data.append(
        "user",
        JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
        }),
      );
      data.append(
        "sighting",
        JSON.stringify({
          date: formData.date,
          location: formData.location,
          latitude: formData.latitude,
          longitude: formData.longitude,
          isAshTree:
            formData.isAshTree === undefined ? null : formData.isAshTree,
          canopyDieback: formData.canopyDieback,
          epicormicShoots: formData.epicormicShoots,
          woodpecker: formData.woodpecker,
          exitHoles: formData.exitHoles,
          feedingGallery: formData.feedingGallery,
          barkSplitting: formData.barkSplitting,
          emeraldAshBorer: formData.emeraldAshBorer,
          hasSpecimen: formData.hasSpecimen,
          comments: formData.comments,
        }),
      );

      formData.images.forEach((image) => {
        data.append(`images`, image);
      });

      const response = await axios.post(
        "http://localhost:8000/api/sighting",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );
      console.log(response.data);
      if (response.status === 200) {
        navigate("/sightings");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="card">
        <Link
          to="/sightings"
          className="card-cancel"
        >
          Cancel
        </Link>
        <h2 className="text-center text-4xl">Form Summary</h2>
        <div
          className="summary-subcontainer"
          onClick={() => {
            setCurrentStep(2);
            setReturning(true);
          }}
        >
          <h4 className="summary-subheading">Contact Info</h4>
          <div className="edit-label">Click to edit</div>
          <p>
            <strong>First Name:</strong> {formData.firstName}
            {firstNameError && <span className="error">{firstNameError}</span>}
          </p>
          <p>
            <strong>Last Name:</strong> {formData.lastName}
            {/* Display error message if there is one */}
            {lastNameError && <span className="error">{lastNameError}</span>}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
            {/* Display error message if there is one */}
            {emailError && <span className="error">{emailError}</span>}
          </p>
          <p>
            <strong>Phone:</strong> {formData.phone || "--"}
          </p>
        </div>
        <div
          className="summary-subcontainer"
          onClick={() => {
            setCurrentStep(3);
            setReturning(true);
          }}
        >
          <h4 className="summary-subheading">Sight date and location</h4>
          <p>
            <strong>Date:</strong> {formData.date}
          </p>
        </div>
        <div
          className="summary-subcontainer"
          onClick={() => {
            setCurrentStep(5);
            setReturning(true);
          }}
        >
          <h4 className="summary-subheading">Location Notes:</h4>
          <p>
            <strong>Location:</strong> {formData.location || "--"}
          </p>
        </div>
        <div
          className="summary-subcontainer"
          onClick={() => {
            setCurrentStep(4);
            setReturning(true);
          }}
        >
          <h4 className="summary-subheading">Map</h4>
          <p>
            <strong>Latitude:</strong> {formData.latitude || "--"}
          </p>
          <p>
            <strong>Longitude:</strong> {formData.longitude || "--"}
          </p>
        </div>

        <div
          className="summary-subcontainer"
          onClick={() => {
            setCurrentStep(6);
            setReturning(true);
          }}
        >
          <h4 className="summary-subheading">Ash Tree</h4>
          <p>
            <strong>Is Ash Tree:</strong>{" "}
            {formData.isAshTree === undefined
              ? "Not sure"
              : formData.isAshTree
              ? "Yes"
              : "No"}
          </p>
        </div>
        <div
          className="summary-subcontainer"
          onClick={() => {
            setCurrentStep(7);
            setReturning(true);
          }}
        >
          <h4 className="summary-subheading">Secondary Indicators</h4>
          <p>
            <strong>Canopy Dieback:</strong>{" "}
            {formData.canopyDieback ? "Yes" : "No"}
          </p>
          <p>
            <strong>Epicormic Shoots:</strong>{" "}
            {formData.epicormicShoots ? "Yes" : "No"}
          </p>
          <p>
            <strong>Increased Woodpecker Activity:</strong>{" "}
            {formData.woodpecker ? "Yes" : "No"}
          </p>
        </div>
        <div
          className="summary-subcontainer"
          onClick={() => {
            setCurrentStep(8);
            setReturning(true);
          }}
        >
          <h4 className="summary-subheading">Primary Indicators</h4>
          <p>
            <strong>Exit Holes:</strong> {formData.exitHoles ? "Yes" : "No"}
          </p>
          <p>
            <strong>Bark Splitting:</strong>{" "}
            {formData.barkSplitting ? "Yes" : "No"}
          </p>
          <p>
            <strong>Feeding Gallery:</strong>{" "}
            {formData.feedingGallery ? "Yes" : "No"}
          </p>
          <p>
            <strong>Emerald Ash Borer:</strong>{" "}
            {formData.emeraldAshBorer ? "Yes" : "No"}
          </p>
        </div>

        <div
          className="summary-subcontainer"
          onClick={() => {
            setCurrentStep(9);
            setReturning(true);
          }}
        >
          <h4 className="summary-subheading">Comments, Specimen</h4>
          <p>
            <strong>Comments:</strong> {formData.comments || "--"}
          </p>
          <p>
            <strong>Has Specimen:</strong> {formData.hasSpecimen ? "Yes" : "No"}
          </p>
        </div>
        <p
          onClick={() => {
            setCurrentStep(10);
            setReturning(true);
          }}
        >
          <strong>Images:</strong> {formData.images.length || "--"}
        </p>
        <button onClick={handleSubmit}>Submit</button>
        <FormNavButtons
          previous={previous}
          currentStep={currentStep}
        />
      </div>
    </div>
  );
};

export default Step11;
