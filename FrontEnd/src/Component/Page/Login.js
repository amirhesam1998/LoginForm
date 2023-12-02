import React from "react";
import { useState } from "react";
import FormData from '../../data/FormData/FormData.json'
import Form from "../Form/Form";
import FormGroup from "../Form/FormGroup";
//import AlertColors from '../Alert/AlertColors'

export default function Login (){
    const [data, setData] = useState(FormData)
    //const [currect ,setCurrect] = useState(false)
    //const [incurrect, setIncurrect] = useState(false)
    
    const handleChange =(e)=>{
        const {name, value} = e.target
        setData ({
            ...data,
            [name]:value,
        })
    }

    return (
        <FormGroup>
            <Form>
                <input type="text" name="username" value={data.username} onChange={handleChange} className="form-control" placeholder="Username" />
                <input type="password" name="password" value={data.password} onChange={handleChange} className="form-control" placeholder="Password" />
                <button type="button" className="btn btn-warning m-3">Login</button>
                <button  type="submit" className="btn btn-primary">Register</button>
            </Form>
        </FormGroup>
    )

}