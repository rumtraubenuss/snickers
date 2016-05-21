import React from 'react';
import Button from 'react-bootstrap/lib/Button';

export default props => (
  <span>
    {props.message.time.getTime()} - {props.message.id}
  </span>
)
