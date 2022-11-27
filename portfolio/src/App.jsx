import { Typography } from '@mui/material';
import { useState } from 'react';
import './App.css';
import Project from './components/Project';
import projects from "./projects"

function App() {
  return (
    <div className="App">
      <Typography variant="h2" component="h2">
        Calvin (HABIT) Blunk (any/all)
      </Typography>
      {
        projects.map((project, id) => {
          return <Project key={id} title={project.title} description={project.description} link={project.description} />
        })
      }
    </div>
  );
}

export default App;
