'use client'
import React, { useState } from 'react';
import validator from 'validator';

export default function ContactUs() {
  const initialFormData = {
    name: '',
    service: '',
    duration: '',
    budget: '',
    mobile: '',
    email: '',
    message: '',
  }
  const [formData, setFormData] = useState(initialFormData);

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

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0; // returns true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const result = await fetch('api/contact',
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData),
        }
      ).then((res) => {
        console.log('Response received')
        if (res.status === 200) {
          console.log('Response succeeded!')
          setFormData(initialFormData);
        }
      })
      alert('Form submitted successfully!');
      console.log('result', result)
    }
  };

  return (
    <div className='flex flex-col bg-[#F2E9E4] p-20'>
      <h2 className='font-bold text-6xl text-center'>Contact Us</h2>
      <div className='my-14' >
        <form onSubmit={handleSubmit} className='flex flex-col gap-5 max-w-5xl' style={{ margin: "auto" }}>
          <div className='flex flex-row justify-between gap-48'>
            <input
              className='p-3 rounded-md border-[#DFE4EA]'
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder='David John'
              required
            />

            <input
              className='p-3 rounded-md border-[#DFE4EA]'
              type="text"
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              placeholder='Service'
            />
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
              required
            />

            <input
              className='p-3 rounded-md border-[#DFE4EA]'
              type="number"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder='Budget'
              required
            />
          </div>

          <div className='flex flex-row justify-between gap-48'>
            <div className='flex flex-col w-full'>
              <input
                className='p-3 rounded-md border-[#DFE4EA]'
                type="text"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder='Mobile Number'
                required
              />
              {errors.mobile && <div style={{ color: 'red' }}>{errors.mobile}</div>}
            </div>
            <div className='flex flex-col w-full'>
              <input
                className='p-3 rounded-md border-[#DFE4EA]'
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='info@example.com'
                required
              />
              {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
            </div>
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
              required
            />
            <button className='flex items-center bg-blue-600 py-3 px-8 text-white rounded-full' type="submit">Submit</button>
          </div>

        </form>

      </div>
    </div>
  );
};

