import React, { useState } from "react";
import './Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import AlertColors from '../Alert/AlertColors'
import FormData from '../../data/FormData/FormData.json'

export default function Form  (){
    const [formData, setFormData] = useState(FormData);
    const [errorOccurred, setErrorOccurred] = useState(false);
    const [curred, setcurred] = useState(false);
  
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
        await axios.post('http://127.0.0.1:8000/accounts/api/registry/', formData, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        setcurred(true)
      } catch (error) {
        setErrorOccurred(true)
      }
    };
    return (
        <div className="container ">
          <div className="row justify-content-center m-5">
            <div className="col-md-6 alireza p-4 ">
            {errorOccurred && <AlertColors color="red" text="A success alert for showing message." />}
            {curred && <AlertColors color="red" text="An error alert for showing message." />}
              <form className="m-2" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} className="form-control hover" placeholder="First Name" />
                </div>
                <div className="form-group">
                  <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} className="form-control" placeholder="Last Name" />
                </div>
                <div className="form-group row">
                  <div className="col">
                    <input type="text" name="birthday" value={formData.year} onChange={handleChange} className="form-control col-md-2" placeholder="year" />
                  </div>
                  <div className="col">
                    <input type="text" name="birthday" value={formData.month} onChange={handleChange} className="form-control col-md-2" placeholder="mouth" /> 
                  </div >  
                  <div className="col">
                    <input type="text" name="birthday" value={formData.day} onChange={handleChange} className="form-control col-md-2" placeholder="day" />
                  </div>
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
                <div className="form-group">
                  <input type="password" name="password" value={formData.rePassword} onChange={handleChange} className="form-control" placeholder="rePassword" />
                </div>
                <button onClick={handleSubmit} type="submit" className="btn btn-primary">Register</button>
                <button type="button" className="btn btn-warning m-3">Login</button>
              </form>
            </div>
          </div>
        </div>
      )
  };
  