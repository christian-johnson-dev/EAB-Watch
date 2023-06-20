import React from "react";
import FormNavButtons from "../Shared/FormNavButtons";
import { Link } from "react-router-dom";

const Step2 = ({
  formData,
  handleChange, //* on v2 handleChange should be on the component so it can be customized for each field.  Would have been nice to be able to have trim on some fields and not others
  currentStep,
  previous,
  next,
  returning,
  summary,
}) => {
  const [errors, setErrors] = React.useState({});
  const [touched, setTouched] = React.useState({});

  const validate = () => {
    let tempErrors = {}; // tempErrors is an object that will hold the validation error messages for each field
    let formIsValid = true; // formIsValid is a boolean that will be set to false if any field is invalid
    tempErrors.firstName =
      formData.firstName.trim() !== "" ? "" : "First Name is required"; // If the trimmed value of firstName is not empty "", then error message ="".  Else, error message = "First Name is required"
    tempErrors.lastName =
      formData.lastName.trim() !== "" ? "" : "Last Name is required"; //same logic as firstName
    // Nested ternary operator for required and valid email format
    tempErrors.email = formData.email
      ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) // regex for email format
        ? ""
        : "Email is not valid."
      : "Email is required.";
    // Nested ternary operator for: if data is present, check if it's valid format
    tempErrors.phone = formData.phone
      ? /^[0-9]{10}$/.test(formData.phone)
        ? ""
        : "Phone number is not valid."
      : "";
    //
    //Check if any validation errors are present in tempErrors. If so, set formIsValid to false
    for (let error in tempErrors) {
      if (tempErrors[error] !== "") {
        formIsValid = false;
        break;
      }
    }

    setErrors({
      ...tempErrors,
    });

    return formIsValid;
  };

  // Takes the name of the field : true and adds it to the 'touched' state object
  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched({
      ...touched,
      [name]: true,
    });
  };
  //*
  React.useEffect(() => {
    if (currentStep !== 2) return;
    if (Object.keys(touched).length !== 0) validate();
  }, [formData, touched]); // validate when formData or touched changes

  return (
    <>
      <div className="card">
        <Link
          to="/sightings"
          className="card-cancel"
        >
          Cancel
        </Link>
        <div className="heading-container">
          <p className="step-heading">Section 1 of 4:</p>
          <h3 className="form-heading">Contact info</h3>
        </div>

        <div className="input-container">
          <div className="flex justify-between">
            <p className="input-label">First Name</p>
            <p className="validation-message">
              {touched.firstName && errors.firstName}
            </p>
          </div>
          <input
            type="text"
            name="firstName"
            placeholder="First Name is required"
            value={formData.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            className="text-input"
          />
        </div>

        <div className="input-container">
          <div className="flex justify-between">
            <p className="input-label">Last Name</p>
            <p className="validation-message">
              {touched.lastName && errors.lastName}
            </p>
          </div>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name is required"
            value={formData.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            className="text-input"
          />
        </div>

        <div className="input-container">
          <div className="flex justify-between">
            <p className="input-label">Email</p>
            <p className="validation-message">
              {touched.email && errors.email}
            </p>
          </div>
          <input
            type="text"
            name="email"
            placeholder="Email is required"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="text-input"
          />
        </div>

        <div className="input-container">
          <div className="flex justify-between">
            <p className="input-label">Phone</p>
            <p className="validation-message">
              {touched.phone && errors.phone}
            </p>
          </div>
          <input
            type="text"
            name="phone"
            placeholder="Phone is optional"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className="text-input"
          />
        </div>

        <FormNavButtons
          previous={previous}
          next={next}
          returning={returning}
          summary={summary}
          currentStep={currentStep}
        />
        {/* end card */}
      </div>
    </>
  );
};

export default Step2;
