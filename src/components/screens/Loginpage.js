import React, { useState } from 'react'
import loginapi from '../../api/APIlogin'
import { useNavigate } from 'react-router-dom'

export default function Loginpage() {
    const [data, setData]=useState({email:'',password:''})

    const handlechange=(e)=>{
       const {name,value}=e.target
       setData({...data,[name]:value})
    }

    const navigate=useNavigate();
    const handlesubmit= async(e)=>{
         e.preventDefault()
        const response= await loginapi(data);
        if(!response.token){
          // console.log(response);
          alert(response.data.message)
          return;
        }
        else{
        navigate("/");
      }
    }
  return (
    <div className='backgroundlform'>
    <form onSubmit={handlesubmit} className='lform'>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" name="email"  value={data.email} onChange={(e)=>{handlechange(e)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input  type="password" name="password" value={data.password} onChange={(e)=>{handlechange(e)}}/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
