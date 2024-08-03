import React, { useState} from 'react'
import './Register.css'
import axios from 'axios'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';



const Register = ({setShowLogin}) => {


  const navigate=useNavigate()

  const [menu,setMenu]=useState(false)
  const [data,setData]=useState()
  const [addDetails, setAddDetails] = useState({
    userName: "",
    password: "",
    confirmPassword: ""
  });

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };



  const handleSubmit = (e) => {
    e.preventDefault(); 
    const fetch=async()=>{
    try {
      const { userName, password, confirmPassword } = addDetails;
      if (password === confirmPassword && userName) {
      const response = await axios.post(`http://localhost:3009/Register`, addDetails);
      alert("Data Saved")
      } else if (password !== confirmPassword || password === "" || confirmPassword === "") {
        alert("Enter the password correctly");
      } else {
        alert("Username must not be empty");
      }
    } catch (err) {
      console.log(err);
    }
  }
  fetch()
  };


  const handleRe=()=>{
navigate('/Login')
  }


 

  const { userName, password, confirmPassword } = addDetails;

  return (
    <div className='container'>
     
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="userName"
          placeholder="Username"
          value={addDetails.userName}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={addDetails.password}
          onChange={handleChange}
        />
        
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={addDetails.confirmPassword}
            onChange={handleChange}
          />
       
        <button type="submit">Register</button>
        <ul>
        <li  style={{cursor:"pointer", textDecoration:"underline",listStyle:"none"}} onClick={handleRe}>"I already have an account"</li>
      </ul>
      </form>
    </div>
  );
};

export default Register;








