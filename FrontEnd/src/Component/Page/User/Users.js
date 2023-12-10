import React, { useContext } from "react";
import { AuthContext } from '../../../Context/Authentication';

import './Users.css'

export default function Users(){
    const { auth, logout } = useContext(AuthContext);
    const firstname = auth.first_name;

    const handleLogout = () => {
        logout();
        
    };

    return (
        <div>
            <h2>Hello {firstname}</h2>
            <button type="button" onClick={handleLogout} className="btn btn-warning m-3">Logout</button>
        </div>
    );
}
