import React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

function ProjectCard(project) {
  return (
    <Card className={`box box__${project.primary_color} box__${project.size}`}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h3 className='heading__small'>{project.title}</h3>
        </Grid>
        <Grid item xs={12}>
          <p className='box__text'>{project.description}</p>
        </Grid>
        <Grid item xs={12}>
          <a href={project.link} className={`btn btn--${project.secondary_color} btn--animated box__button`}>
            Visit Site
          </a>
        </Grid>
      </Grid>
    </Card>
  );
}

export default ProjectCard;
