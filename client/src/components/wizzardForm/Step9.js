import React from "react";

const Step9 = ({
  formData,
  handleCheckboxChange,
  handleChange,
  previous,
  next,
}) => {
  // Component Logic
  return (
    <div>
      <h2>Comments:</h2>
      <textarea
        name="comments"
        placeholder="Feel free to describe, comment or ask a question."
        value={formData.comments}
        onChange={handleChange}
      />
      {/* Checkbox for hasSpecimen */}
      <label htmlFor="hasSpecimen">Do you have a specimen?</label>
      <input
        type="checkbox"
        name="hasSpecimen"
        checked={formData.hasSpecimen}
        onChange={handleCheckboxChange}
      />
      <button onClick={previous}>Previous</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default Step9;
