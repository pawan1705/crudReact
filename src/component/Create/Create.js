import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("clicked");
    axios.post(
      `https://663dc103e1913c4767954688.mockapi.io/api/v2/crud-ps`,
    {name:name,email:email
    }).then(()=>navigate('/read'));
    // navigate('/read');
  }
  return (
    <div>
      <div className="d-flex justify-content-between m-2">
      <h2 style={{"textAlign":"center"}}>Create</h2>
      <button className='btn btn-primary' onClick={()=>navigate('/read')}>Show Data</button>
      </div>
      <form>
      <div className="mb-3 m-4">
    <label className="form-label">Name</label>
    <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)}/>
  </div>
  <div className="mb-3 mt-3 m-4">
    <label className="form-label">Email address</label>
    <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)}/>
  </div>
 
  <button type="submit" className="btn btn-primary m-4" onClick={handleSubmit} >Submit</button>
</form >
    </div>
  )
}

export default Create;