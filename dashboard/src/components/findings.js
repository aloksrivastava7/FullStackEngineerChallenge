import React, { useState } from 'react'
import { Table } from 'semantic-ui-react'
import { useEffect } from 'react'
import { getRepos } from '../service/api'
import '../App.css'

const Findings = () => {
  useEffect(() => {
    loadRepoDetails();
  }, [])
 
  const[repos, setRepos] = useState([]);
  const loadRepoDetails = async () => {
  let response = await getRepos();
  setRepos(response.data);
 } 
  return (
  <div className='findingstable'>
    <Table singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Rule ID</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell>Severity</Table.HeaderCell>
          <Table.HeaderCell>Line Number</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
      {
          repos.map(repo => (
          <Table.Row>
            <Table.Cell>{repo.Findings.RuleId}</Table.Cell>
            <Table.Cell>{repo.Findings.Description}</Table.Cell>
            <Table.Cell>{repo.Findings.Severity}</Table.Cell>
            <Table.Cell>{repo.Findings.lineNumber}</Table.Cell>
          </Table.Row>

          ))
      }
      </Table.Body>
    </Table>
  </div>
)}

export default Findings