import React from "react";

const Step2 = ({ data, handleChange, previous, next }) => {
  // Component Logic
  return (
    <div>
      <h2>Contact Info</h2>
      {/* Input for user.firstName, user.lastName, user.email, user.phone */}
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={data.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={data.lastName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={data.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={data.phone}
        onChange={handleChange}
      />

      <button onClick={previous}>Previous</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default Step2;
