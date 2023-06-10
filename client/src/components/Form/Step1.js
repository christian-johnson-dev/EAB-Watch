import React from "react";

const Step1 = ({ next }) => {
  // Component Logic
  return (
    <div>
      <h2>Reporting an EAB</h2>
      <p>This form will have 4 sections spread over 10 screens:</p>
      <ol>
        <li>Contact Info</li>
        <li>Sighting Date and Location</li>
        <li>Shighting checklist and description</li>
        <li>Upload photos</li>
      </ol>
      <p>It should take about 5 minutes to complete.</p>
      <button onClick={next}>Let's get started!</button>
      {/* Link back to sightings */}
      <a href="#">I'll come back later...</a>
      {/* Component Content */}
    </div>
  );
};

export default Step1;
