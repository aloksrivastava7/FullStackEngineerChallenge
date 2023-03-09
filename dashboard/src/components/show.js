import React from 'react'
import { Table, Label } from 'semantic-ui-react'
import '../App.css'

const Show = () => (
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
        <Table.Row>
          <Table.Cell>No Name Specified</Table.Cell>
          <Table.Cell>Unknown</Table.Cell>
          <Table.Cell>
          <Label as='a' color='blue' image>
              Queued At
              <Label.Detail>Time</Label.Detail>
          </Label>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
);

export default Show