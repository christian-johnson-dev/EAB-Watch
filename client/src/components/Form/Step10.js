import React from "react";
import FormNavButtons from "../Shared/FormNavButtons";

const Step10 = ({
  handleImageChange,
  setFormData,
  formData,
  summary,
  currentStep,
  returning,
  previous,
  next,
}) => {
  const { images } = formData;
  const selectedImages = images.map((image) => URL.createObjectURL(image));

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    handleImageChange(files);
  };

  const handleRemoveImage = (indexToRemove) => {
    setFormData({
      ...formData,
      images: formData.images.filter((_, index) => index !== indexToRemove),
    });
  };

  return (
    <div>
      <div className="card">
        <h2>Images upload</h2>
        {/* Thumbnails */}
        <div className="thumbnails">
          {selectedImages.map((image, index) => (
            <div
              key={index}
              style={{ display: "inline-block", position: "relative" }}
            >
              <img
                src={image}
                alt="thumbnail"
                style={{ width: "100px" }}
              />
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  cursor: "pointer",
                  background: "red",
                  color: "white",
                  borderRadius: "50%",
                  width: "20px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  rotate: "45deg",
                }}
                onClick={() => handleRemoveImage(index)}
              >
                +
              </div>
            </div>
          ))}
        </div>
        <input
          type="file"
          name="images"
          multiple
          accept="image/jpeg, image/png, image/webp"
          onChange={handleImageUpload}
        />

        <button onClick={previous}>Previous</button>
        <FormNavButtons
          previous={previous}
          next={next}
          returning={returning}
          summary={summary}
          currentStep={currentStep}
        />
      </div>
    </div>
  );
};

export default Step10;
