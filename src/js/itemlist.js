import React, { Component } from 'react';
import Entry from './entry';
import { Panel, ButtonToolbar, Button, Table, Well } from 'react-bootstrap/lib';

export default ({ messages, handleDelClick, handleAdd }) => {
  const rows = messages.map((message, index) =>
    <tr key={index}>
      <td>
        <Entry
          message={message}
        />
      </td>
      <td className="text-center">
        <Button
          bsStyle="danger"
          bsSize="xsmall"
          onClick={() => handleDelClick(message.id)}
          type="button"
        >X</Button>
      </td>
    </tr>
  );

  return (
    <Panel collapsible defaultExpanded header="Some Items">
      <Well bsSize="small">
        <ButtonToolbar>
          <Button
            bsSize="xsmall"
            bsStyle="primary"
            onClick={handleAdd}
          >Add</Button>
        </ButtonToolbar>
      </Well>
      <Table hover striped bordered>
        <tbody>
          {rows}
        </tbody>
      </Table>
    </Panel>
  );
}
