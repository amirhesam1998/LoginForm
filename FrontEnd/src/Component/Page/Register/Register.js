import React, {useState } from "react";
import './Register.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from '../../../API/Axios'
import AlertColors from '../../Alert/AlertColors'
import FormData from '../../../data/FormData/FormData.json'
import FormGroup from '../../Form/FormGroup'
import Form from "../../Form/Form";
import { Link } from 'react-router-dom';

const REGISTER_URL = '/registry/'
export default function Register  (){
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
      console.log("Form Data:", formData);
      try {
        await Axios.post(REGISTER_URL, FormData, {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true
        });
        setcurred(true)
      } catch (error) {
        setErrorOccurred(true)
        
      }
    };
    return (
      <FormGroup>
        {curred && <AlertColors color="green" text="An error alert for showing message." />}
        {errorOccurred && <AlertColors color="red" text="A success alert for showing message." />}
        <Form layout="vertical">
        {Object.keys(formData).map((fieldName) => (
          <input
            key={fieldName}
            type={fieldName.includes("password") ? "password" : fieldName.includes("username") ? "username" : fieldName.includes("rePassword") ? "password" : fieldName.includes("email") ? "email" : 'text'}
            name={fieldName}
            value={formData[fieldName]}
            onChange={handleChange}
            className="form-control m-1"
            placeholder={fieldName.charAt(0).toUpperCase() + fieldName.slice(1).replace(/_/, ' ')}
          />
        ))}
            <button onClick={handleSubmit} type="submit" className="btn btn-primary">Register</button>
            <Link to="/" className="btn btn-warning m-3">Login</Link>
        </Form>
      </FormGroup>
      )
  };
  