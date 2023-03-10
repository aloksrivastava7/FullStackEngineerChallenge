import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import '../App.css'
import { useState, useNavigate } from 'react';
import { addRepo } from '../service/api.js';

const initialValue = {
  RepositoryName: '',
  Status: '',
  Findings: {
    RuleId: '',
    Description: '',
    Severity: '',
    lineNumber: ''
  },
  QueuedAt: '',
  ScanningAt: '',
  FinishedAt: ''
}

const SubmitForm = () => {

  const [initialdata, setinitialdata] = useState(initialValue);
  const {RepositoryName, Status, Findings, QueuedAt, ScanningAt, FinishedAt} = initialdata;
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