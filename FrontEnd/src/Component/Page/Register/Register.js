import React, { useRef, useState } from "react";
import './Register.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import AlertColors from '../../Alert/AlertColors'
import FormData from '../../../data/FormData/FormData.json'
import FormGroup from '../../Form/FormGroup'
import Form from "../../Form/Form";
import { Link } from 'react-router-dom';
import RenderInputs from "../../Input/Input";

export default function Register  (){
    const formData = useRef(FormData)
    const [errorOccurred, setErrorOccurred] = useState(false);
    const [curred, setcurred] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post('http://127.0.0.1:8000/api/registry/', formData, {
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
      <FormGroup>
        {curred && <AlertColors color="green" text="An error alert for showing message." />}
        {errorOccurred && <AlertColors color="red" text="A success alert for showing message." />}
        <Form layout="vertical">
          <RenderInputs></RenderInputs>
            <button onClick={handleSubmit} type="submit" className="btn btn-primary">Register</button>
            <Link to="/" className="btn btn-warning m-3">Login</Link>
        </Form>
      </FormGroup>
      )
  };
  