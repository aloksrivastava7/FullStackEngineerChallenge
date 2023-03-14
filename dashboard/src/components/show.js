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
  }, [])

  const getAllRepos = async (id) => {
    let response = await getRepos();
    setRepos(response.data);
    
  }

  const deleteData = async (id) => {
    await deleteRepo(id);
    getAllRepos();
    console.log(repos.length)
    if(repos.length === 1) { // When no data is present
      navigate('/');
    }
  }

  const redirectToFindings = async (id) => {
    // await getRepo(id);
    // console.log(this.props.first);
    navigate('/Findings',{state:{id:id}});
  }

  return (
    <div className='table'>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Repo Name</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Findings</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            repos.map(repo => (
              <Table.Row>
                <Table.Cell onClick={() => redirectToFindings(repo._id)}>{repo.RepositoryName}</Table.Cell>
                <Table.Cell>{repo.Status}</Table.Cell>
                <Table.Cell>
                <div>
                  <Label as='a' color='blue' image>
                  {repo.Status}
                    <Label.Detail>{repo.createdAt}</Label.Detail>
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
    </div>
  )
};

export default Show