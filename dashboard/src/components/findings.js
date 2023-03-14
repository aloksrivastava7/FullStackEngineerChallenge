import React, { useState } from "react";
import { Table } from "semantic-ui-react";
import { useEffect } from "react";
import { getRepo } from "../service/api";
import "../App.css";
import { useLocation } from "react-router-dom";

const Findings = () => {
  const location = useLocation();
  // const { item } = route.params;
  useEffect(() => {
    loadRepoDetails();
  }, []);

  const [repo, setRepos] = useState( []);
  const loadRepoDetails = async () => {
    // let response = await getRepos();
    const id=location.state.id;
    // console.log(Id)
     let response=await getRepo(id);
    //  const data=response.data.Findings
     setRepos(response.data.Findings)
     console.log(response.data.Findings);
  };

  return (
    <div className="findingstable">
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
          {repo.map((repos) => (
            <Table.Row>
              <Table.Cell>{repos.RuleId}</Table.Cell>
              <Table.Cell>{repos.Description}</Table.Cell>
              <Table.Cell>{repos.Severity}</Table.Cell>
              <Table.Cell>{repos.lineNumber}</Table.Cell>
            </Table.Row>
           ))} 
          {/* <pre>{JSON.stringify(repos, null, 2)}</pre>
         <div>{repos.RuleId}</div> */}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Findings;
