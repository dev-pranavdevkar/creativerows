import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    phone: '',
    city: '',
    message: ''
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Perform form submission or data handling logic here
    console.log(formData);
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      course: '',
      phone: '',
      city: '',
      message: ''
    });
    alert('Data submitted successfully');
  };

  return (
    <div className='contact-form p-lg-4 py-4'>
      <h3 className="text-white bold-none px-4">CONTACT US</h3>
      <form className='px-4' onSubmit={handleSubmit}>
        <div className='py-1'>
          <label>
            Name: <span className='text-danger'>*</span>
          </label>
          <br />
          <input className="w-100 form-control" type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className='py-1'>
          <label>
            Email ID: <span className='text-danger'>*</span>
          </label>
          <br />
          <input className="w-100 form-control" type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className='py-1'>
          <label>
            Course: <span className='text-danger'>*</span>
          </label>
          <br />
          <select className="w-100 form-control" name="course" value={formData.course} onChange={handleChange} required>
            <option value="" disabled>Select a course</option>
            <option value="MBA">MBA</option>
            <option value="PGDM">PGDM</option>
          </select>
        </div>

        <div className='py-1'>
          <label>
            Phone:<span className='text-danger'>*</span>
          </label>
          <br />
          <input className="w-100 form-control" type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>

        <div className='py-1'>
          <label>
            City: <span className='text-danger'>*</span>
          </label>
          <br />
          <input className="w-100 form-control" type="text" name="city" value={formData.city} onChange={handleChange} required />
        </div>

        <div className='py-1'>
          <label>
            Message: <span className='text-danger'>*</span>
          </label>
          <br />
          <textarea aria-multiline rows={3} className='w-100 py-1 form-control' name="message" value={formData.message} onChange={handleChange} required />
        </div>

        <button className='btn-submit mt-3' type="submit">Submit</button>
      </form>
    </div>
  );
}
