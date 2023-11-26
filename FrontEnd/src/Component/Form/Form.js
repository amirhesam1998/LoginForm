import React, { useState } from "react";
import './Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function Form (){
    const [formData, setFormData] = useState({
      first_name: '',
      last_name: '',
      birthday: '',
      phone_number: '',
      email: '',
      username: '',
      password: '',
      rePassword: '', // Changed to match your initial state
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
                const response = await axios.post('http://127.0.0.1:8000/accounts/api/registry/', formData);
        alert('Your information was successfully received.');
        // Optionally, you can reset the form after successful submission
        setFormData({
          first_name: '',
          last_name: '',
          birthday: '',
          phone_number: '',
          email: '',
          username: '',
          password: '',
        });
      } catch (error) {
        alert('Failed to submit information.');
      }
    };
  
    return (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} className="form-control" placeholder="First Name" />
                </div>
                <div className="form-group">
                  <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} className="form-control" placeholder="Last Name" />
                </div>
                <div className="form-group">
                  <input type="text" name="birthday" value={formData.birthday} onChange={handleChange} className="form-control" placeholder="Birthday" />
                </div>
                <div className="form-group">
                  <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} className="form-control" placeholder="Phone Number" />
                </div>
                <div className="form-group">
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" placeholder="Email" />
                </div>
                <div className="form-group">
                  <input type="text" name="username" value={formData.username} onChange={handleChange} className="form-control" placeholder="Username" />
                </div>
                <div className="form-group">
                  <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
              </form>
            </div>
          </div>
        </div>
      )
  };
