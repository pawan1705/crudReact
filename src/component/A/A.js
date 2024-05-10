import React,{useEffect,useState} from 'react'
import { empData } from '../../EmpData'
import './A.css';
const First = () => {
  const [data,setData]=useState([]);
  const [firstName,setFirstName]=useState("");
  const[lastName,setLastName]=useState("");
  const [age,setAge]=useState(0);
  const[id,setId]=useState(0);
  const[isUpdate,setIsUpdate]=useState(false);
  useEffect(()=>{
    setData(empData);
  },[])

  const handleEdit=(id)=>{
    const dt=data.filter(item=>item.id===id);
    if(dt !== undefined){
      setIsUpdate(true);
      setId(id);
      setFirstName(dt[0].firstName);
      setLastName(dt[0].lastName);
      setAge(dt[0].age);
    }
  }

  const handleSave=(e)=>{
    e.preventDefault();
    const dt=[...data];
    const newObject={
      id:id+1,
      firstName:firstName,
      lastName:lastName,
      age:age
    }
    dt.push(newObject);
    setData(dt);
  }

  const handleUpdate=()=>{
    const index=data.map((item)=>{
      return item.id
    }).indexOf(id);

    const dt=[...data];
    dt[index].firstName=firstName;
    dt[index].lastName=lastName;
    dt[index].age=age;

    setData(dt);
    handleClear();
  }
  const handleClear=()=>{
    setId(0);
      setFirstName('');
      setLastName('');
      setAge('');
      setIsUpdate(false);
  }

  //for delete item
  const handleDelete=(id)=>{
    if(id>0){
      if(window.confirm("Are you sure to want delete this item!!")){
        const dl=data.filter(item=>item.id !== id);
      setData(dl)
    }
    }
  }
  return (
    <div className="A">
      <div className="edit">
      <div>
      <label>
        First Name:<input type="text" placeholder='Enter your first name' onChange={(e)=>setFirstName(e.target.value)} value={firstName} />
      </label>
      </div>
      <div>
      <label>
        Last Name:<input type="text" placeholder='Enter your last name' onChange={(e)=>setLastName(e.target.value)} value={lastName} />
      </label>
      </div>
      <div>
      <label>
        Age:<input type="text" placeholder='Enter your age'onChange={(e)=>setAge(e.target.value)} value={age} />
      </label>
      </div>
      <div>
        {
          ! isUpdate ?
          <button onClick={(e)=>handleSave(e)} className='btn btn-primary'> Save </button>
          :
          <button onClick={(e)=>handleUpdate()} className='btn btn-primary'> Update </button>
        }
      &nbsp;<button onClick={(e)=>handleClear()} className='btn btn-danger'> Clear </button>
      </div>
      </div>
      <table className='table table-bordered table-hover '>
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {
          data.map((item,index)=>{
            return(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.age}</td>
                <td>
                  <button onClick={(e)=>handleEdit(item.id)} className='btn btn-primary'> Edit </button>&nbsp;
                  <button onClick={(e)=>handleDelete(item.id)} className='btn btn-danger'> Delete </button>
                </td>
                </tr>
            )
          })
        }
        </tbody>
      </table>
    </div>
  )
}

export default First