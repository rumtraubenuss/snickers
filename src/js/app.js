import React, { Component } from 'react';
import Entry from './entry';
import ItemList from './itemlist';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap/lib';
import { subscribe } from 'horizon-react';

class App extends Component {
  handleDelClick = id => {
    this.props.horizon('messages').remove(id);
  }

  handleAdd = ev => {
    ev.preventDefault();
    this.props.horizon('messages').store({ time: new Date(), copy: 'n/a' });
  }

  render() {
    const { messages } = this.props;
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={12}>
            <PageHeader>Example page header <small>Subtext for header</small></PageHeader>
            <h2>Foo bar</h2>
            <ItemList
              handleAdd={this.handleAdd}
              handleDelClick={this.handleDelClick}
              messages={messages}
            />
          </Col>
        </Row>
      </Grid>
    )
  }
}

const mapDataToProps = {
  messages: hz => hz('messages'),
};

export default subscribe({ mapDataToProps })(App);
