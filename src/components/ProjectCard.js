import React from 'react';
import { Link, Card, Grid } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function ProjectCard(project) {
  return (
    <Card className={`box box__${project.primary_color} box__${project.size}`}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div class='box__header'>
            <h3 className='heading__small'>{project.title}</h3>
            <div>
              <Link href={project.link}>
                <ExitToAppIcon class='icon__card' />
              </Link>
              <Link href={project.github}>
                <GitHubIcon class='icon__card' />
              </Link>
            </div>
          </div>
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
          <div className='box__tech'>
            {project.tech_stack.map((tech) => (
              <p className='box__tech box__tech--item'>{tech}</p>
            ))}
          </div>
        </Grid>
      </Grid>
    </Card>
  );
}

export default ProjectCard;
