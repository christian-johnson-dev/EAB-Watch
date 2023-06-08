import React from "react";

const Step10 = ({ previous, next, handleImageChange, formData }) => {
  const { images } = formData;
  const selectedImages = images.map((image) => URL.createObjectURL(image));

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    handleImageChange(files);
  };
  // Component Logic
  return (
    <div>
      <h2>Images upload</h2>
      {/* Thumbnails */}
      <div className="thumbnails">
        {selectedImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="thumbnail"
            style={{ width: "100px" }}
          />
        ))}
      </div>
      <input
        type="file"
        name="images"
        multiple
        onChange={handleImageUpload}
      />

      <button onClick={previous}>Previous</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default Step10;
