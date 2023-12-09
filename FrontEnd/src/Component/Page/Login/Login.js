import React, { useState, useContext,} from "react";
import FormData from '../../../data/FormData/FormData.json'
import Form from "../../Form/Form";
import FormGroup from "../../Form/FormGroup";
import { Link, useNavigate } from 'react-router-dom';
import Axios from '../../../API/Axios';
import { AuthContext } from '../../../Context/Authentication';

const LOGIN_URL = '/token/login/'
export default function Login (){
  //const errRef = useRef('')
  const {setAuth} = useContext(AuthContext)
    const [username, setUsername] = useState(FormData.username)
    const [password, setPassword] = useState(FormData.password)
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    
    const handleChange = (e) => {
      const { name, value } = e.target;
      if (name === 'username') {
        setUsername(value);
      } else if (name === 'password') {
        setPassword(value);
      }
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await Axios.post(
          LOGIN_URL,
          { username, password },
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          }
        );
    
        const token = response?.data?.token;

        console.log({ username, password, token });
        setAuth({ username, token })
        setUsername('');
        setPassword('');
        
        navigate('/users');
      } catch (error) {
        if (!error.response) {
          setError('No server response');
        } else if (error.response?.status === 400 || error.response?.status === 401) {
          setError('Invalid credentials');
        }
      }
    };
    return (
        <FormGroup>
            <Form>
              <p>{error}</p>
                <input type="text" name="username" value={username} onChange={handleChange} className="form-control" placeholder="Username" />
                <input type="password" name="password" value={password} onChange={handleChange} className="form-control" placeholder="Password" />
                <button type="button" onClick={handleSubmit} className="btn btn-warning m-3" >Login</button>
                <Link to="/register" className="btn btn-primary">Register</Link>
            </Form>
        </FormGroup>
    )

}