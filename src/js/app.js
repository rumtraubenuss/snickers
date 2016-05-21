import React, { Component } from 'react';
import Entry from './entry';

const ItemsList = props => {
  const messages = props.messages.map((message, index) =>
    <Entry
      key={index}
      handleDelClick={props.handleDelClick}
      message={message}
    />
  );
  return (
    <div>{messages}</div>
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

  handleClick = (ev) => {
    ev.preventDefault();
    this.messages.store({ time: new Date(), copy: 'n/a' });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Add</button>
        <ItemsList handleDelClick={this.handleDelClick} messages={this.state.messages} />
      </div>
    )
  }
}
