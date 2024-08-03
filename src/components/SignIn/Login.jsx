import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Login.css'


const Login = () => {
const [data2,setData2]=useState({

})
    const [data,setData]=useState({
      userName: "",
       password: "",
      

})


const handleChange=(event)=>{

   
   
    const{name,value}=event.target;
    setData(prev=>({
        ...prev,
        [name]:value
    }))

}
const navigate=useNavigate()
    const handleClick=(e)=>{ 
      e.preventDefault()
        const fetchData = async () => {
        try {
             const response2 = await axios.get("http://localhost:3009/Register")
           
            
            
            const filteredData = response2.data.find(item => item.userName===data.userName )&&response2.data.find(item=>item.password===data.password);
            if(filteredData){
                navigate("/home")
            }else{
                alert("invalid username password")
            }
            
        } catch (e) {
            console.log(e)
        }
    
    }
    
    fetchData()  
    }

   
   
   
   
    const handleLogin=()=>{
    navigate('/Register')
   }
    
 



  return (

    <div className='container'>
        <form className='form'>
      <input type='text' placeholder='enter your username' onChange={handleChange} name="userName" value={data.userName}/>
      <input type='password' placeholder='enter your password' onChange={handleChange} name="password" value={data.password}
      />
      <button onClick={handleClick}>Login</button>
      <ul>
        <li  style={{cursor:"pointer", textDecoration:"underline",listStyle:"none"}} onClick={handleLogin}>"I already have an account"</li>
      </ul>
      </form>
    </div>
  )
}

export default Login
