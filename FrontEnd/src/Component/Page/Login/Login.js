import React, { useState, useContext,} from "react";
import FormData from '../../../data/FormData/FormData.json'
import Form from "../../Form/Form";
import FormGroup from "../../Form/FormGroup";
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../../API/Axios';
import AuthContext from '../../../Context/Authentication';

const LOGIN_URL = '/login/'
export default function Login (){
  //const errRef = useRef('')
  const {setAuth} = useContext(AuthContext)
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
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(
          LOGIN_URL,
          JSON.stringify({ user, pass }),
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          }
        );
    
        const accessToken = response?.data?.accessToken;
        const roles = response?.data?.roles;
    
        // Store the access token securely (e.g., in cookies or local storage)
        // Update your setAuth function to handle token storage
    
        setAuth({ user, pass, roles, accessToken });
        setUser('');
        setPass('');
        setSuccess(true);
    
        // Redirect to the desired page upon successful login
        navigate('/users');
      } catch (error) {
        if (!error.response) {
          setError('No server response');
        } else if (error.response?.status === 400 || error.response?.status === 401) {
          setError('Invalid credentials');
        }
        // Handle other error cases as needed
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