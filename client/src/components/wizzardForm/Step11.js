import React from "react";
import axios from "axios";

const Step11 = ({ formData, previous }) => {
  const handleSubmit = async () => {
    try {
      //* This is where the front end form data (flat) is converted to the back end db schema (nested) and is sent to the server.
      //! Keep 'data' here within the submit function unless it is needed elsewhere.

      const data = {
        user: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
        },
        sighting: {
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
          images: formData.images,
        },
      };
      const response = await axios.post(
        "http://localhost:8000/api/sighting",
        data,
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Form Summary</h2>
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
      <h4>Sight date and location</h4>
      <p>
        <strong>Date:</strong> {formData.date}
      </p>
      <p>
        <strong>Location:</strong> {formData.location}
      </p>
      <p>
        <strong>Latitude:</strong> {formData.latitude || "--"}
      </p>
      <p>
        <strong>Longitude:</strong> {formData.longitude || "--"}
      </p>
      <h4>Tree Info & Symptoms</h4>
      <p>
        <strong>Is Ash Tree:</strong>{" "}
        {formData.isAshTree === undefined
          ? "Not sure"
          : formData.isAshTree
          ? "Yes"
          : "No"}
      </p>
      <p>
        <strong>Canopy Dieback:</strong> {formData.canopyDieback ? "Yes" : "No"}
      </p>
      <p>
        <strong>Epicormic Shoots:</strong>{" "}
        {formData.epicormicShoots ? "Yes" : "No"}
      </p>
      <p>
        <strong>Increased Woodpecker Activity:</strong>{" "}
        {formData.woodpecker ? "Yes" : "No"}
      </p>
      <p>
        <strong>Exit Holes:</strong> {formData.exitHoles ? "Yes" : "No"}
      </p>
      <p>
        <strong>Bark Splitting:</strong> {formData.barkSplitting ? "Yes" : "No"}
      </p>
      <p>
        <strong>Feeding Gallery:</strong>{" "}
        {formData.feedingGallery ? "Yes" : "No"}
      </p>
      <p>
        <strong>Emerald Ash Borer:</strong>{" "}
        {formData.emeraldAshBorer ? "Yes" : "No"}
      </p>
      <p>
        <strong>Has Specimen:</strong> {formData.hasSpecimen ? "Yes" : "No"}
      </p>
      <h4>Comments, Images, and Classification</h4>
      <p>
        <strong>Comments:</strong> {formData.comments || "--"}
      </p>
      <p>
        <strong>Images:</strong> {formData.images.length || "--"}
      </p>

      <button onClick={previous}>Previous</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Step11;
