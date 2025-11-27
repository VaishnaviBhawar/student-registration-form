import React, { useState } from "react";
import "./App.css";

const StudentForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    gender: "",
    dob: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zip: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Student Data Submitted:", formData);
    onSuccess(formData);
  };

  return (
    <div className="container">
      <h2>Student Registration Form</h2>
      <p>Fill in your details to register for the course.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="inputField"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          className="inputField"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          className="inputField"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="course"
          className="inputField"
          placeholder="Course"
          value={formData.course}
          onChange={handleChange}
          required
        />

        {/* Gender */}
        <div className="radioGroup">
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
              required
            /> Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            /> Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Other"
              checked={formData.gender === "Other"}
              onChange={handleChange}
            /> Other
          </label>
        </div>

        <input
          type="date"
          name="dob"
          className="inputField"
          value={formData.dob}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          className="inputField"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="city"
          className="inputField"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="state"
          className="inputField"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
          required
        />
        <select
  name="country"
  className="selectField"
  value={formData.country}
  onChange={handleChange}
  required
>
  <option value="">Select Country</option>
  <option value="India">India</option>
  <option value="United States">United States</option>
  <option value="United Kingdom">United Kingdom</option>
  <option value="Canada">Canada</option>
  <option value="Australia">Australia</option>
  <option value="Germany">Germany</option>
  <option value="France">France</option>
  <option value="Japan">Japan</option>
  <option value="China">China</option>
  <option value="Brazil">Brazil</option>
  <option value="Russia">Russia</option>
  <option value="South Africa">South Africa</option>
  <option value="Mexico">Mexico</option>
  <option value="Italy">Italy</option>
  <option value="Spain">Spain</option>
  <option value="Other">Other</option>
</select>

        <input
          type="text"
          name="zip"
          className="inputField"
          placeholder="Zip Code"
          value={formData.zip}
          onChange={handleChange}
          required
        />

        <div>
          <button type="submit" className="button submitButton">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};


export default StudentForm;
