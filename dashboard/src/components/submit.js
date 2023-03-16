import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import '../App.css'
import { useState} from 'react';
import {redirect, useNavigate} from 'react-router-dom'
import { addRepo } from '../service/api.js';

const initialValue = {
  RepositoryName: '',
  Status: '',
  Findings: [{
    RuleId: 'G402',
    Description: 'TLS InsecureSkipVerify set true.',
    Severity: 'HIGH',
    lineNumber: '32'
  }],
}

const SubmitForm = () => {

  const [initialdata, setinitialdata] = useState(initialValue);
  let navigate = useNavigate();
  const onInputChange = (e) => {
    setinitialdata({...initialdata, [e.target.name]: e.target.value});
  }

  const addInitialData = async () => {
    if(initialdata.RepositoryName === '' || initialdata.Status === '') {
      navigate('/');
    }
    else {
      await addRepo(initialdata);
      navigate('/show');
    }
  }

  const redirectToShow = async () => {
    navigate('/show');
  }
  return (
    <div className='form'>
    <Form>
      <Form.Field>
        <label>Repository Name</label>
        <input placeholder='Repository Name' onChange={onInputChange} name='RepositoryName' required/>
      </Form.Field>
      <Form.Field>
        <select onChange={onInputChange} name="Status" required>
          <option value="Select Status" selected="true" disabled="disabled">Select Status</option>
          <option value="Scanning">Scanning</option>
          <option value="Queued">Queued</option>
          <option value="Finished">Finished</option>
        </select>
      </Form.Field>  
      <Button type='submit' onClick={() => addInitialData()}>Submit</Button>
      <Button type='submit' onClick={() => redirectToShow()}>Show existing Scan Results</Button>
    </Form>
  </div>
  )
  
  };

export default SubmitForm