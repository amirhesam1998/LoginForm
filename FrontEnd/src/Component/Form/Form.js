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
      re_Password: '',
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
        //console.log('Form Data:', formData);
        const response = await axios.post('127.0.0.1:8000/accounts/api/registry', formData);
        alert('your information successfully received ')
      } catch (error) {
        alert('your information NOT   successfully received ')
      }
    };
  
    return (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="form-control" placeholder="First Name" />
                </div>
                <div className="form-group">
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="form-control" placeholder="Last Name" />
                </div>
                <div className="form-group">
                  <input type="text" name="birthday" value={formData.birthday} onChange={handleChange} className="form-control" placeholder="Birthday" />
                </div>
                <div className="form-group">
                  <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="form-control" placeholder="Phone Number" />
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
                <div className="form-group">
                  <input type="password" name="repeatedPassword" value={formData.repeatedPassword} onChange={handleChange} className="form-control" placeholder="Repeat Password" />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
              </form>
            </div>
          </div>
        </div>
      )
  };
  
  