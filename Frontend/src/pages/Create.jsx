import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import http from '../http'

const Contact = (props) => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const handleChange =  (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]:value}))
  }
  const submitForm = () => {
    http.post('/users', inputs).then((res) => {
      navigate('/');
    })
  }
  return (
    <div>
      <h2>New User</h2>
      <div className="row">
        <div className="card p-4 col-sm-6 justify-content-center">
          <label htmlFor="">Name</label>
          <input type="text" name='name' className='form-control' value={inputs.name || ''} onChange={handleChange}/>

          <label htmlFor="">Email</label>
          <input type="email" name='email' className='form-control' value={inputs.email || ''} onChange={handleChange}/>


          <label htmlFor="">Password</label>
          <input type="password" name='password' className='form-control' value={inputs.password || ''} onChange={handleChange}/>

          <button type='button' onClick={submitForm} className='btn btn-primary mt-2'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Contact