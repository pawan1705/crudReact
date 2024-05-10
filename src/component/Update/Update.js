import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Update = () => {
  const navigate=useNavigate();
  const[id,setId]=useState(0);
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");

  useEffect(()=>{
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  },[])

  const handleUpdate=(e)=>{
    e.preventDefault();
    axios.put( `https://663dc103e1913c4767954688.mockapi.io/api/v2/crud-ps/${id}`,
    {
      name:name,
      email:email,
    }
  ).then(()=>navigate('/read'));
  }
  return (
    <>
     <div className="d-flex justify-content-between m-2">
      <h2 style={{"textAlign":"center"}}>Update</h2>
      <button className='btn btn-secondary' onClick={()=>navigate('/read')}>Back</button></div>
      <form>
      <div className="mb-3 m-4">
    <label className="form-label">Name</label>
    <input value={name} type="text" className="form-control" 
    onChange={(e)=>setName(e.target.value)}
    />
  </div>
  <div className="mb-3 mt-3 m-4">
    <label className="form-label">Email address</label>
    <input value={email} type="email" className="form-control" 
    onChange={(e)=>setEmail(e.target.value)}
    />
  </div>
 
  <button type="submit" className="btn btn-primary m-4" 
  onClick={handleUpdate} >Update</button>
</form >
    </>
  )
}

export default Update;