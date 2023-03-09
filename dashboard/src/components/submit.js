import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import '../App.css'

const SubmitForm = () => (
  <div className='form'>
    <Form>
      <Form.Field>
        <label>Repository Name</label>
        <input placeholder='Repo Name'/>
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  </div>
)

export default SubmitForm