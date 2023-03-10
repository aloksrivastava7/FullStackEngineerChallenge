import React, { useState } from 'react'
import { Table } from 'semantic-ui-react'
import '../App.css'
import { getRepos } from '../service/api';
import { useEffect } from 'react';

const Show = () => {

const[repos, setRepos] = useState([]);

  useEffect(() => {
    getAllRepos();
  }, [])

  const getAllRepos = async () => {
    let response = await getRepos();
    setRepos(response.data);
  }

  return (
    <div className='table'>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Repo Name</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Findings</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            repos.map(repo => (
              <Table.Row>
                <Table.Cell>{repo.RepositoryName}</Table.Cell>
                <Table.Cell>{repo.Status}</Table.Cell>
                <Table.Cell>{repo.Findings}</Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>
      </Table>
    </div>
  )
};

export default Show