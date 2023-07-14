import React from 'react';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import LanguageIcon from '@mui/icons-material/Language';
import { Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

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
        {/* <Grid item xs={12}>
          <a href={project.link} className={`btn btn--${project.secondary_color} btn--animated box__button`}>
            Visit Site
          </a>
        </Grid> */}
        <Grid item xs={12}>
          <Link href={project.link}>
            <LanguageIcon />
          </Link>
          <Link href={project.github}>
            <GitHubIcon />
          </Link>
        </Grid>
      </Grid>
    </Card>
  );
}

export default ProjectCard;
