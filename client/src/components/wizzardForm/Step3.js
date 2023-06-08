import React from "react";

const Step3 = ({ formData, handleChange, previous, next }) => {
  // Component Logic
  return (
    <div>
      <h2>When did you make this sighting?</h2>
      <input
        type="date"
        name="date"
        placeholder="Date"
        value={formData.date}
        onChange={handleChange}
      />

      <button onClick={previous}>Previous</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default Step3;
