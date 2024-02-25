// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './pinput.css';

export default function PInput({handleClick, item}) {
  const [formData, setFormData] = useState({
    name: '',
    telephone: '',
    email: '',
    time: '',
    date: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/submitData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Data successfully submitted
        console.log('Data submitted successfully');
      } else {
        console.error('Failed to submit data');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  useEffect(()=>{
    console.log(item)
  }, [])

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="head">
          <header className="head1">Contact Details</header>
          <header className="head2">Schedule</header>
        </div>

        <div className="main-sub">
          <div className="sub1">
            <div className="input-field">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="telephone">Telephone:</label>
              <input type="text" id="telephone" name="telephone" value={formData.telephone} onChange={handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="email">E-mail:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
          </div>

          <div className="sub2">
            <div className="input-field">
              <label htmlFor="time">Time:</label>
              <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="date">Date:</label>
              <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} />
            </div>
          </div>
        </div>
        <button className="button1" type="submit">Book Appoinment</button>
      </form>
    </div>
  );
}
