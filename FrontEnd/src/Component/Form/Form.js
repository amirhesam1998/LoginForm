import React, { useState } from "react";
import userData from './userData.json';
import './Form.css';

export default function Form (){
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      birthday: '',
      phoneNumber: '',
      email: '',
      username: '',
      password: '',
      repeatedPassword: '',
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
        console.log('Form Data:', formData);
        //const response = await axios.post('http://your-django-backend.com/register/', formData);
        // Handle response, e.g., redirect to another page, show success message, etc.
      } catch (error) {
        // Handle error
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" value={userData.firstName} onChange={handleChange} />
        <input type="text" name="lastName" value={userData.lastName} onChange={handleChange} />
        <input type="text" name="birthday" value={userData.birthday} onChange={handleChange} />
        <input type="text" name="phoneNumber" value={userData.phoneNumber} onChange={handleChange} />
        <input type="email" name="email" value={userData.email} onChange={handleChange} />
        <input type="text" name="username" value={userData.username} onChange={handleChange} />
        <input type="password" name="password" value={userData.password} onChange={handleChange} />
        <input
          type="password"
          name="repeatedPassword"
          value={userData.repeatedPassword}
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>
    );
  };
  
  