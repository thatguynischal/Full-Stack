import React, { useEffect } from 'react'
import { useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import http from '../http'

const Edit = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const {id} = useParams();

  useEffect(() =>{
    fetchUsers();

  }, []);

  const fetchUsers = () => {
    http.get('/users/'+id+'/edit').then((res) => {
      setInputs({
        name: res.data.name,
        email: res.data.email,
      })
    })
  }

  const handleChange =  (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]:value}))
  }
  const submitForm = () => {
    http.put('/users/'+id, inputs).then((res) => {
      navigate('/');
    })
  }
  return (
    <div>
      <h2>Edit User</h2>
      <div className="row">
        <div className="card p-4 col-sm-6 justify-content-center">
          <label htmlFor="">Name</label>
          <input type="text" name='name' className='form-control' value={inputs.name || ''} onChange={handleChange}/>

          <label htmlFor="">Email</label>
          <input type="email" name='email' className='form-control' value={inputs.email || ''} onChange={handleChange}/>

          <button type='button' onClick={submitForm} className='btn btn-primary mt-2'>Update</button>
        </div>
      </div>
    </div>
  )
}

export default Edit