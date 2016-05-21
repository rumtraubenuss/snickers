import React from 'react';

export default props => (
  <div>
    <button onClick={() => props.handleDelClick(props.message.id)} type="button">X</button>
    {props.message.time.getTime()} - {props.message.id}
  </div>
)
