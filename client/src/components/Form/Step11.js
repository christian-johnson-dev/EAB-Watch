import React from "react";
import axios from "axios";
import FormNavButtons from "../Shared/FormNavButtons";

const Step11 = ({
  formData,
  previous,
  setCurrentStep,
  currentStep,
  summary,
  returning,
  setReturning,
}) => {
  const handleSubmit = async () => {
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Form Summary</h2>
      <div
        onClick={() => {
          setCurrentStep(2);
          setReturning(true);
        }}
      >
        <h4>Contact Info</h4>
        <p>
          <strong>First Name:</strong> {formData.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {formData.lastName}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Phone:</strong> {formData.phone || "--"}
        </p>
      </div>

      <h4>Sight date and location</h4>
      <p
        onClick={() => {
          setCurrentStep(3);
          setReturning(true);
        }}
      >
        <strong>Date:</strong> {formData.date}
      </p>
      <p
        onClick={() => {
          setCurrentStep(5);
          setReturning(true);
        }}
      >
        <strong>Location:</strong> {formData.location}
      </p>
      <p
        onClick={() => {
          setCurrentStep(4);
          setReturning(true);
        }}
      >
        <strong>Latitude:</strong> {formData.latitude || "--"}
      </p>
      <p
        onClick={() => {
          setCurrentStep(4);
          setReturning(true);
        }}
      >
        <strong>Longitude:</strong> {formData.longitude || "--"}
      </p>
      <h4>Tree Info & Symptoms</h4>
      <p
        onClick={() => {
          setCurrentStep(6);
          setReturning(true);
        }}
      >
        <strong>Is Ash Tree:</strong>{" "}
        {formData.isAshTree === undefined
          ? "Not sure"
          : formData.isAshTree
          ? "Yes"
          : "No"}
      </p>
      <p
        onClick={() => {
          setCurrentStep(7);
          setReturning(true);
        }}
      >
        <strong>Canopy Dieback:</strong> {formData.canopyDieback ? "Yes" : "No"}
      </p>
      <p
        onClick={() => {
          setCurrentStep(7);
          setReturning(true);
        }}
      >
        <strong>Epicormic Shoots:</strong>{" "}
        {formData.epicormicShoots ? "Yes" : "No"}
      </p>
      <p
        onClick={() => {
          setCurrentStep(7);
          setReturning(true);
        }}
      >
        <strong>Increased Woodpecker Activity:</strong>{" "}
        {formData.woodpecker ? "Yes" : "No"}
      </p>
      <p
        onClick={() => {
          setCurrentStep(8);
          setReturning(true);
        }}
      >
        <strong>Exit Holes:</strong> {formData.exitHoles ? "Yes" : "No"}
      </p>
      <p
        onClick={() => {
          setCurrentStep(8);
          setReturning(true);
        }}
      >
        <strong>Bark Splitting:</strong> {formData.barkSplitting ? "Yes" : "No"}
      </p>
      <p
        onClick={() => {
          setCurrentStep(8);
          setReturning(true);
        }}
      >
        <strong>Feeding Gallery:</strong>{" "}
        {formData.feedingGallery ? "Yes" : "No"}
      </p>
      <p
        onClick={() => {
          setCurrentStep(8);
          setReturning(true);
        }}
      >
        <strong>Emerald Ash Borer:</strong>{" "}
        {formData.emeraldAshBorer ? "Yes" : "No"}
      </p>
      <p
        onClick={() => {
          setCurrentStep(9);
          setReturning(true);
        }}
      >
        <strong>Has Specimen:</strong> {formData.hasSpecimen ? "Yes" : "No"}
      </p>
      <h4>Comments, Images, and Classification</h4>
      <p
        onClick={() => {
          setCurrentStep(9);
          setReturning(true);
        }}
      >
        <strong>Comments:</strong> {formData.comments || "--"}
      </p>
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
  );
};

export default Step11;
