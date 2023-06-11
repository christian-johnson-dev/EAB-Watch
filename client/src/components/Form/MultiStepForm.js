import React from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";
import Step9 from "./Step9";
import Step10 from "./Step10";
import Step11 from "./Step11";

const MultiStepForm = () => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: new Date().toISOString().slice(0, 10), // set default date to today
    location: "",
    latitude: "",
    longitude: "",
    isAshTree: undefined,
    canopyDieback: false,
    epicormicShoots: false,
    woodpecker: false,
    exitHoles: false,
    barkSplitting: false,
    feedingGallery: false,
    emeraldAshBorer: false,
    hasSpecimen: false,
    comments: "",
    images: [],
  });

  const handleChange = (event) => {
    console.log(event.target.name, event.target.value);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleImageChange = (newImages) => {
    setFormData({
      ...formData,
      images: [...formData.images, ...newImages],
    });
  };

  React.useEffect(() => {
    console.log(formData);
  }, [formData]);

  const [currentStep, setCurrentStep] = React.useState(1);
  const next = () => {
    setCurrentStep(currentStep + 1);
  };
  const previous = () => {
    setCurrentStep(currentStep - 1);
  };

  switch (currentStep) {
    case 1:
      return (
        <Step1
          next={next}
          handleChange={handleChange}
          formData={formData}
        />
      );
    case 2:
      return (
        <Step2
          next={next}
          previous={previous}
          handleChange={handleChange}
          formData={formData}
        />
      );
    case 3:
      return (
        <Step3
          next={next}
          previous={previous}
          handleChange={handleChange}
          formData={formData}
        />
      );
    case 4:
      return (
        <Step4
          next={next}
          previous={previous}
          setFormData={setFormData} // pass setFormData as a prop
          formData={formData}
          setCurrentStep={setCurrentStep} // so we can use it in Step4 to jump to Step6
        />
      );
    case 5:
      return (
        <Step5
          next={next}
          previous={previous}
          handleChange={handleChange}
          formData={formData}
        />
      );
    case 6:
      return (
        <Step6
          next={next}
          previous={previous}
          handleChange={handleChange}
          setFormData={setFormData}
          formData={formData}
        />
      );
    case 7:
      return (
        <Step7
          next={next}
          previous={previous}
          handleCheckboxChange={handleCheckboxChange}
          formData={formData}
        />
      );
    case 8:
      return (
        <Step8
          next={next}
          previous={previous}
          handleCheckboxChange={handleCheckboxChange}
          formData={formData}
        />
      );
    case 9:
      return (
        <Step9
          next={next}
          previous={previous}
          handleChange={handleChange}
          handleCheckboxChange={handleCheckboxChange}
          formData={formData}
        />
      );
    case 10:
      return (
        <Step10
          next={next}
          previous={previous}
          handleImageChange={handleImageChange}
          setFormData={setFormData}
          formData={formData}
        />
      );

    default:
      return (
        <Step11
          next={next}
          previous={previous}
          handleChange={handleChange}
          formData={formData}
          setCurrentStep={setCurrentStep}
        />
      );
  }
};

export default MultiStepForm;
