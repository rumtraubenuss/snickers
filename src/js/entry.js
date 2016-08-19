import React from 'react';
import Button from 'react-bootstrap/lib/Button';

export default ({ message }) => (
  <span>
    {message.time.getTime()} - {message.id}
  </span>
)
