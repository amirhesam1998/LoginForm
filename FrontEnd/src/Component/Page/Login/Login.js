import React, { useState, useContext, useRef} from "react";
import FormData from '../../../data/FormData/FormData.json'
import Form from "../../Form/Form";
import FormGroup from "../../Form/FormGroup";
import { Link, useNavigate } from 'react-router-dom';
//import { useHistory } from 'history';
import axios from '../../../API/Axios';
import AuthContex from "../../../Context/Authentication";

const LOGIN_URL = '/login/'
export default function Login (){
  //const errRef = useRef('')
  const {setAuth} = useContext(AuthContex)
    const [user, setUser] = useState(FormData.username)
    const [pass, setPass] = useState(FormData.password)
    const [success,setSuccess]= useState(false)
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    
    const handleChange = (e) => {
      const { name, value } = e.target;
      if (name === 'username') {
        setUser(value);
      } else if (name === 'password') {
        setPass(value);
      }
    }
    const handleSubmit = async(e)=>{
        e.preventDefault()
          try {
                const response = await axios.post(LOGIN_URL,JSON.stringify({user, pass}),
                {
                  headers: {'Content-Type': 'application/json'},
                    withCredentials: true
                }
              );
              console.log(JSON.stringify(response?.data))
              const accessToken = response?.data?.accessToken;
              const roles = response?.data?.roles;
                setAuth({user,pass,roles,accessToken})
                setUser('')
                setPass('')
                setSuccess(true)
                navigate('/users');
            } catch (error) {
              if(!error.response){
                setError('no server response')
              }else if(error.response?.status === 400) {
                setError('password or username incureced')
              }else if(error.response?.status === 401) {
                setError('unauthorized')
              }
            }
        };
      
    return (
        <FormGroup>
            <Form>
                <input type="text" name="username" value={user} onChange={handleChange} className="form-control" placeholder="Username" />
                <input type="password" name="password" value={pass} onChange={handleChange} className="form-control" placeholder="Password" />
                <button type="button" onClick={handleSubmit} className="btn btn-warning m-3" >Login</button>
                <Link to="/register" className="btn btn-primary">Register</Link>
            </Form>
        </FormGroup>
    )

}