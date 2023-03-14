import React, { useState } from 'react'
import { Table, Label } from 'semantic-ui-react'
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
                <Table.Cell>
                <div>
                  <Label as='a' color='blue' image>
                    Rule ID
                    <Label.Detail>{repo.Findings.RuleId}</Label.Detail>
                  </Label>
                  <Label as='a' color='teal' image>
                    Description
                    <Label.Detail>{repo.Findings.Description}</Label.Detail>
                  </Label>
                  <Label as='a' color='yellow' image>
                    Severity
                    <Label.Detail>{repo.Findings.Severity}</Label.Detail>
                  </Label>
                  <Label as='a' color='red' image>
                    Line Number
                    <Label.Detail>{repo.Findings.lineNumber}</Label.Detail>
                  </Label>
                </div>
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