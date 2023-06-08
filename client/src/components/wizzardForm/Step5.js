import React from "react";

const Step5 = ({ formData, handleChange, previous, next }) => {
  // Component Logic
  return (
    <div>
      <h2>Location: Manual entry</h2>
      <textarea
        name="location"
        placeholder="Enter a street address and city or intersection and city"
        value={formData.location}
        onChange={handleChange}
      />

      <button onClick={previous}>Previous</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default Step5;
