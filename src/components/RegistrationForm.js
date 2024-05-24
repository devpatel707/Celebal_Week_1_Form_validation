

import React, { useState } from 'react';
import "./RegistrationForm.css";
import {useHistory} from 'react-router-dom';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    showPassword: false,
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: '',
  });

  const [errors, setErrors] = useState({});
  const history = useHistory();

  const validate = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = "First Name is required";
    if (!formData.lastName) errors.lastName = "Last Name is required";
    if (!formData.username) errors.username = "Username is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.password) errors.password = "Password is required";
    if (!formData.phoneNo) errors.phoneNo = "Phone Number is required";
    if (!formData.country) errors.country = "Country is required";
    if (!formData.city) errors.city = "City is required";
    if (!formData.panNo) errors.panNo = "PAN Number is required";
    if (!formData.aadharNo) errors.aadharNo = "Aadhar Number is required";
    return errors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      history.push('/success', formData);
    } 
    else {
      setErrors(validationErrors);
    }
  };

  const toggleShowPassword = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword,
    });
  };
  
  

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        {errors.firstName && <p>{errors.firstName}</p>}
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        {errors.lastName && <p>{errors.lastName}</p>}
      </div>
      <div>
        <label>Username</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
        {errors.username && <p>{errors.username}</p>}
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Password</label>
        
        <input type={formData.showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} />
        <button type="button" onClick={toggleShowPassword}>
          {formData.showPassword ? "Hide" : "Show"}
        </button>
        {errors.password && <p>{errors.password}</p>}
      </div>
      <div>
        <label>Phone Number</label>
        <input type="text" name="phoneNo" value={formData.phoneNo} onChange={handleChange} />
        {errors.phoneNo && <p>{errors.phoneNo}</p>}
      </div>
      <div>
        <label>Country</label>
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="Canada">Canada</option>
          <option value="USA">USA</option>
          <option value="Australia">Australia</option>
          
        </select>
        {errors.country && <p>{errors.country}</p>}
      </div>
      <div>
        <label>City</label>
        <select name="city" value={formData.city} onChange={handleChange}>
          <option value="">Select City</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Jaipur">Jaipur</option>
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Pune">Pune</option>
         
        </select>
        {errors.city && <p>{errors.city}</p>}
      </div>
      <div>
        <label>PAN Number</label>
        <input type="text" name="panNo" value={formData.panNo} onChange={handleChange} />
        {errors.panNo && <p>{errors.panNo}</p>}
      </div>
      <div>
        <label>Aadhar Number</label>
        <input type="text" name="aadharNo" value={formData.aadharNo} onChange={handleChange} />
        {errors.aadharNo && <p>{errors.aadharNo}</p>}
      </div>
      <button type="submit" onClick={handleSubmit} disabled={Object.keys(errors).length > 0}>Submit</button>
      
    </form>
  );
};

export default RegistrationForm;
