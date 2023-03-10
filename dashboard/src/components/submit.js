import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import '../App.css'
import { useState, useNavigate } from 'react';
import { addRepo } from '../service/api.js';

const initialValue = {
  RepositoryName: '',
  Status: 'Queued',
  Findings: {
    RuleId: 'G402',
    Description: 'TLS InsecureSkipVerify set true.',
    Severity: 'HIGH',
    lineNumber: '32'
  },
  QueuedAt: '',
  ScanningAt: '',
  FinishedAt: ''
}

const SubmitForm = () => {

  const [initialdata, setinitialdata] = useState(initialValue);
  let navigate = useNavigate();
  const onInputChange = (e) => {
    setinitialdata({...initialdata, [e.target.name]: e.target.value});
  }

  const addInitialData = async () => {
    await addRepo(initialdata);
    navigate('/show');
  }

  return (
    <div className='form'>
    <Form>
      <Form.Field>
        <label>Repository Name</label>
        <input placeholder='Repository Name' onChange={(e) => onInputChange(e)} name='RepositoryName' />
      </Form.Field>
      <Button type='submit' onClick={() => addInitialData()}>Submit</Button>
    </Form>
  </div>
  )
  
  };

export default SubmitForm