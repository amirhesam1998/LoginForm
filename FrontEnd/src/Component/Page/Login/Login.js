import React from "react";
import { useState } from "react";
import FormData from '../../../data/FormData/FormData.json'
import Form from "../../Form/Form";
import FormGroup from "../../Form/FormGroup";
import { Link } from 'react-router-dom';
import axios from "axios";
//import { useHistory } from "react-router-dom";
//import AlertColors from '../Alert/AlertColors'

export default function Login (){
    const [data, setData] = useState(FormData)
    //const history = useHistory();
    const [error, setError] = useState(null);
    //const [currect ,setCurrect] = useState(false)
    //const [incurrect, setIncurrect] = useState(false)
    
    const handleChange =(e)=>{
        const {name, value} = e.target
        setData ({
            ...data,
            [name]:value,
        })
    }
    const Token =''
    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
             await axios.post(
              '/api/login/',
              data,
              {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Token ${Token}`,
                },
              }
            );
      
            window.location.href = "/users";
          } catch (error) {
            // Handle errors (e.g., show an error message)
            setError("Invalid credentials. Please try again."); // Update the error state
            console.error(error);
          }
        };
      
    return (
        <FormGroup>
            <Form>
                <input type="text" name="username" value={data.username} onChange={handleChange} className="form-control" placeholder="Username" />
                <input type="password" name="password" value={data.password} onChange={handleChange} className="form-control" placeholder="Password" />
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type="button" onClick={handleSubmit} className="btn btn-warning m-3" >Login</button>
                <Link to="/register" className="btn btn-primary">Register</Link>
            </Form>
        </FormGroup>
    )

}