import { Button, Typography } from '@mui/material';
import React from 'react';

const Project = (props) => {
  return <div>
      <Typography variant="h3" element="h3"><Button variant="text" href={props.link}>{props.title}</Button></Typography>
      <Typography variant="p" element="p">{props.description}</Typography>
      
  </div>;
};

export default Project;
