import React from 'react'
import { Button, Dropdown, Form } from 'semantic-ui-react'
import '../App.css'
import { useState} from 'react';
import {useNavigate} from 'react-router-dom'
import { addRepo } from '../service/api.js';

const initialValue = {
  RepositoryName: '',
  Status: '',
  Findings: {
    RuleId: 'G402',
    Description: 'TLS InsecureSkipVerify set true.',
    Severity: 'HIGH',
    lineNumber: '32'
  },
}

const Status = [
  {  
    key: 'Scanning',
    text: 'Scanning',
    value: 'Scanning',
  },
  {  
    key: 'Queued',
    text: 'Queued',
    value: 'Queued',
  },
  {  
    key: 'Finished',
    text: 'Finished',
    value: 'Finished',
  }
]

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
        <input placeholder='Repository Name' onChange={onInputChange} name='RepositoryName' />
      </Form.Field>
      <Form.Field>
      <Dropdown
        placeholder='Select Status'
        fluid
        selection
        options={Status}
        
      />
      </Form.Field>
      <Button type='submit' onClick={() => addInitialData()}>Submit</Button>
    </Form>
  </div>
  )
  
  };

export default SubmitForm