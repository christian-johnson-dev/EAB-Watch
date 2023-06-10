import React from "react";

const Step7 = ({ formData, handleCheckboxChange, previous, next }) => {
  // Component Logic
  return (
    <div>
      <h2>Secondary Indicators</h2>

      <div>
        <input
          type="checkbox"
          name="canopyDieback"
          checked={formData.canopyDieback}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="canopyDieback">Canopy Dieback</label>
      </div>

      <div>
        <input
          type="checkbox"
          name="epicormicShoots"
          checked={formData.epicormicShoots}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="epicormicShoots">Epicormic Shoots</label>
      </div>

      <div>
        <input
          type="checkbox"
          name="woodpecker"
          checked={formData.woodpecker}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="woodpecker">Woodpecker</label>
      </div>

      <button onClick={previous}>Previous</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default Step7;
