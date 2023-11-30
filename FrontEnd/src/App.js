import React from 'react';
import './App.css';
import Form from './Component/Form/Form';
import { Alert } from '@material-tailwind/react';

function App() {
  return (
    <div>
      <Form />
      <Alert color="blue">This is a blue alert!</Alert>
      <Alert color="red">This is a red alert!</Alert>
    </div>
  );
}

export default App;
