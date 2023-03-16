import React, { useState } from 'react'
import { Table, Label, Button } from 'semantic-ui-react'
import '../App.css'
import { deleteRepo, getRepos } from '../service/api';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

const Show = () => {

const[repos, setRepos] = useState([]);
let navigate = useNavigate();
  useEffect(() => {
    getAllRepos();
    if(repos.length === 1) { // When no data is present
      navigate('/');
    }
  }, [])

  const getAllRepos = async (id) => {
    let response = await getRepos();
    setRepos(response.data);
    
  }

  const deleteData = async (id) => {
    await deleteRepo(id);
    getAllRepos();
    console.log(repos.length)
  }

  const redirectToFindings = async (id) => {
    // await getRepo(id);
    // console.log(this.props.first);
    navigate('/Findings',{state:{id:id}});
  }

  const redirectToSubmit = async () => {
    navigate('/');
  }
  return (
    <div>
      <div className='table'>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell><h4>Repository Name</h4></Table.HeaderCell>
              <Table.HeaderCell><h4>Status</h4></Table.HeaderCell>
              <Table.HeaderCell><h4>Findings</h4></Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {
              repos.map(repo => (
                <Table.Row>
                  <Table.Cell>{repo.RepositoryName}</Table.Cell>
                  <Table.Cell>{repo.Status}</Table.Cell>
                  <Table.Cell>
                  <div>
                    <Label as='a' color='blue' image>
                    {repo.Status}
                      <Label.Detail onClick={() => redirectToFindings(repo._id)}>{repo.createdAt}</Label.Detail>
                    </Label>
                  </div>
                  </Table.Cell>
                  <Table.Cell>
                    <Button variant="contained" onClick={() => deleteData(repo._id)}>Delete</Button>
                  </Table.Cell>
                </Table.Row>
              ))
            }
          </Table.Body>
        </Table>
        <div className='button'>
        <Button type='submit' onClick={() => redirectToSubmit()}>New Security Scan</Button>
        </div>
      </div>
    </div>
  )
};

export default Show