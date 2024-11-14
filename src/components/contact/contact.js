'use client'
import React, { useState } from 'react';
import validator from 'validator';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    duration: '',
    budget: '',
    mobile: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Custom Validation function
  const validateForm = () => {
    let formErrors = {};

    // Name validation (required)
    if (!formData.name) {
      formErrors.name = 'Name is required';
    }

    // Service validation (required)
    if (!formData.service) {
      formErrors.service = 'Service is required';
    }

    // Duration validation (must be a positive integer)
    if (!formData.duration) {
      formErrors.duration = 'Duration is required';
    } else if (!Number(formData.duration) || formData.duration <= 0) {
      formErrors.duration = 'Duration must be a positive number';
    }

    // Budget validation (must be a positive number)
    if (!formData.budget) {
      formErrors.budget = 'Budget is required';
    } else if (!Number(formData.budget) || formData.budget <= 0) {
      formErrors.budget = 'Budget must be a positive number';
    }

    // Mobile validation (must be a valid mobile number)
    if (!formData.mobile) {
      formErrors.mobile = 'Mobile number is required';
    } else if (!validator.isMobilePhone(formData.mobile, 'any', { strictMode: false })) {
      formErrors.mobile = 'Mobile number must be valid';
    }

    // Email validation (must be a valid email)
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!validator.isEmail(formData.email)) {
      formErrors.email = 'Email is not valid';
    }

    // Message validation (required)
    if (!formData.message) {
      formErrors.message = 'Message is required';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0; // returns true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    if (validateForm()) {
      alert('Form submitted successfully!');
      console.log(formData);
      // Handle actual form submission here (e.g., API call)
    }
  };

  return (
    <div className='flex flex-col bg-[#F2E9E4] p-20'>
      <h2 className='font-bold text-6xl text-center'>Contact Us</h2>
      <div className='my-14' >
        <form onSubmit={handleSubmit} className='flex flex-col gap-5 max-w-5xl' style={{margin: "auto"}}>
          <div className='flex flex-row justify-between gap-48'>
            <input
              className='p-3 rounded-md border-[#DFE4EA]'
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder='David John'
              />
            {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}

            <input
              className='p-3 rounded-md border-[#DFE4EA]'
              type="text"
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              placeholder='Service'
              />
            {errors.service && <div style={{ color: 'red' }}>{errors.service}</div>}
          </div>
          <div className='flex flex-row justify-between gap-48'>
            <input
              className='p-3 rounded-md border-[#DFE4EA]'
              type="number"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder='Duration'
              />
            {errors.duration && <div style={{ color: 'red' }}>{errors.duration}</div>}

            <input
              className='p-3 rounded-md border-[#DFE4EA]'
              type="number"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder='Budget'
              />
            {errors.budget && <div style={{ color: 'red' }}>{errors.budget}</div>}
          </div>

          <div className='flex flex-row justify-between gap-48'>
            <input
              className='p-3 rounded-md border-[#DFE4EA]'
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder='Mobile Number'
              />
            {errors.mobile && <div style={{ color: 'red' }}>{errors.mobile}</div>}

            <input
              className='p-3 rounded-md border-[#DFE4EA]'
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='info@example.com'
              />
            {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
          </div>

          <div className='flex flex-row gap-5 items-end'>
            <textarea
              className='p-3 rounded-md border-[#DFE4EA] w-full'
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder='info@example.com'
              rows={5}
              cols={100}
              />
            {errors.message && <div style={{ color: 'red' }}>{errors.message}</div>}
          <button className='flex items-center bg-blue-600 py-3 px-8 text-white rounded-full' type="submit">Submit</button>
          </div>

        </form>

      </div>
    </div>
  );
};

