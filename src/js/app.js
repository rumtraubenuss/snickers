import React, { Component } from 'react';
import Entry from './entry';
import ItemList from './itemlist';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap/lib';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {messages: []};
    this.messages = props.horizon('messages');
    this.messages.watch()
      .subscribe(items => this.setState({ messages: [...items]}));
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
            <PageHeader>Example page header <small>Subtext for header</small></PageHeader>
            <ItemList
              handleAdd={this.handleAdd}
              handleDelClick={this.handleDelClick}
              messages={this.state.messages}
            />
          </Col>
        </Row>
      </Grid>
    )
  }
}
