import React, { useState } from 'react';
import './App.css';
import {Login} from './Users/Login';
import {Register} from './Users/Register';
import AppRoutes from './Routes/Router';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className="App">
         <Router>
            <AppRoutes/>
         </Router>
      {/* { 
        currentForm === "login" ? (<Login onFormSwitch={toggleForm}/>) : (<Register onFormSwitch={toggleForm}/>)
      } */}
    </div>
  );
}

export default App;
