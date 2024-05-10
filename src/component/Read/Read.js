import React, { useState,useEffect } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'; 
import { Link } from 'react-router-dom';
const Read = () => {
  const[data,setData]=useState([]);
  const navigate=useNavigate();
  const [tableDark,setTableDark]=useState('');
  const getData=()=>{
    axios.get(`https://663dc103e1913c4767954688.mockapi.io/api/v2/crud-ps`).then(res=>setData(res.data));
    
  }
  useEffect(() => {
    getData();
  }, [])
  
  const handleDelete=(id)=>{
    axios.delete(`https://663dc103e1913c4767954688.mockapi.io/api/v2/crud-ps/${id}`).then(()=>{getData()});
  }
  const setLocalStorage=(id,name,email)=>{
    localStorage.setItem("id",id);
    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
  }

  return (
    <>
    <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={()=>{
    if(tableDark==='table-dark') setTableDark('')
      else setTableDark('table-dark');
  }}/>
</div>
    <div className="d-flex justify-content-between m-2">
      <h2 style={{"textAlign":"center"}}>Read</h2>
      <button className='btn btn-secondary' onClick={()=>navigate('/')}>create Data</button></div>
    <table className={`table ${tableDark}`}>
  <thead>
    <tr>
    <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  {
    data.map((item)=>{
      return(
        <tbody >
    <tr>
    <th >{item.id}</th>
      <td>{item.name}</td>
      <td> {item.email}</td>
      <td><Link to='/update'><button className='btn btn-success' onClick={()=>setLocalStorage(item.id,item.name,item.email)}>Edit</button></Link></td>
      <td><button className='btn btn-danger' onClick={()=>handleDelete(item.id)}>Delete</button></td>
    </tr>
  </tbody>
      )
    })
  }
</table>
    </>
  )
}

export default Read