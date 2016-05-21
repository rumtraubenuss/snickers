import Horizon from '@horizon/client';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Entry from './entry';

const horizon = Horizon({ host: 'localhost:8181' });
const messages = horizon('messages');
horizon.connect();

const handleDelClick = (id) => {
  messages.remove(id);
}

const Bar = props => {
  const messages = props.messages.map((message, index) =>
    <Entry
      key={index}
      handleDelClick={handleDelClick}
      message={message}
    />
  );
  return (
    <div>{messages}</div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {messages: []};
    messages.watch().subscribe(items => this.setState({ messages: [...items]}));
  }

  handleClick = (ev) => {
    ev.preventDefault();
    messages.store({ time: new Date(), copy: 'n/a' });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Add</button>
        <Bar messages={this.state.messages} />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
