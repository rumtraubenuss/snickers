import React, { Component } from 'react';
import Entry from './entry';
import { Grid, Row, Col, Panel, ListGroup, ListGroupItem, ButtonToolbar, Button, Table, Well } from 'react-bootstrap/lib';

const ItemsList = props => {
  const messages = props.messages.map((message, index) =>
    <tr key={index}>
      <td>
        <Button bsStyle="danger" bsSize="xsmall" onClick={() => props.handleDelClick(message.id)} type="button">X</Button>
      </td>
      <td>
        <Entry
          handleDelClick={props.handleDelClick}
          message={message}
        />
      </td>
    </tr>
  );
  return (
    <Panel collapsible defaultExpanded header="Some Items">
      <Well bsSize="small">
        <ButtonToolbar>
          <Button bsSize="xsmall" bsStyle="primary" onClick={props.handleAdd}>Add</Button>
        </ButtonToolbar>
      </Well>
      <Table hover striped bordered>
        <tbody>
          {messages}
        </tbody>
      </Table>
    </Panel>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {messages: []};
    this.messages = props.horizon('messages');
    this.messages.watch().subscribe(items => this.setState({ messages: [...items]}));
  }

  handleDelClick = (id) => {
    this.messages.remove(id);
  }

  handleAdd = (ev) => {
    ev.preventDefault();
    this.messages.store({ time: new Date(), copy: 'n/a' });
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={12}>
            <ItemsList handleAdd={this.handleAdd} handleDelClick={this.handleDelClick} messages={this.state.messages} />
          </Col>
        </Row>
      </Grid>
    )
  }
}
