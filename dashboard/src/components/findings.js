import React from 'react'
import { Table } from 'semantic-ui-react'
import '../App.css'

const Findings = () => (
  <div className='findingstable'>
    <Table singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Rule ID</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell>Severity</Table.HeaderCell>
          <Table.HeaderCell>Path name</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>John Lilki</Table.Cell>
          <Table.Cell>September 14, 2013</Table.Cell>
          <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
          <Table.Cell>No</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
)

export default Findings