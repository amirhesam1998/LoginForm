import React, { useState } from "react";
import FormData from '../../data/FormData/FormData.json'

//list Rendering
export default function RenderInputs ()  {
    const [formData, setFormData] = useState(FormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };      
    return Object.keys(formData).map((fieldName) => (
      <input
        key={fieldName}
        type={fieldName.includes("password") ? "password" : fieldName.includes("username") ? "username" : fieldName.includes("rePassword") ? "password":fieldName.includes("email") ? "email":'text'}
        name={fieldName}
        value={formData[fieldName]}
        onChange={handleChange}
        className="form-control m-1"
        placeholder={fieldName.charAt(0).toUpperCase() + fieldName.slice(1).replace(/_/, ' ')}
      />
    ));
        
  };
