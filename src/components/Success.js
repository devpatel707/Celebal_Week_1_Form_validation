

import React from 'react';
import { useLocation } from 'react-router-dom';
import "./RegistrationForm.css";

const Success = () => {
  const location = useLocation();
  const formData = location.state || {};

  return (
    <div style={{padding:10,margin:10}}>
      <h1>Form Submission Successful</h1>
      <p><strong>First Name:</strong> {formData.firstName}</p>
      <p><strong>Last Name:</strong> {formData.lastName}</p>
      <p><strong>Username:</strong> {formData.username}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Phone Number:</strong> {formData.phoneNo}</p>
      <p><strong>Country:</strong> {formData.country}</p>
      <p><strong>City:</strong> {formData.city}</p>
      <p><strong>PAN Number:</strong> {formData.panNo}</p>
      <p><strong>Aadhar Number:</strong> {formData.aadharNo}</p>
    </div>
  );
};

export default Success;
