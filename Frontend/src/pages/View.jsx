import React, { useEffect } from 'react'
import { useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import http from '../http'

const View = () => {
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
  return (
    <div>
      <h2>View User</h2>
      <div className="row">
        <div className="card p-4 col-sm-6 justify-content-center">
          <label htmlFor="">Name</label>
          <p>{inputs.name || ''}</p>
          <label htmlFor="">Email</label>
          <p>{inputs.email || ''}</p>
        </div>
      </div>
    </div>
  )
}

export default View