import { React, useEffect, useState } from 'react';
import ProjectCard from '../../components/ProjectCard';
import Grid from '@mui/material/Grid';

function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [viewAll, setViewAll] = useState(false);

  useEffect(() => {
    fetch('data/data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProjects(data[0].Projects);
      });
  }, []);
  return (
    <section
      className={`section--projects section--projects__original u-margin-bottom-medium ${
        viewAll ? 'section--projects__more' : 'section--projects__original'
      }`}
    >
      <h2 className='heading u-margin-bottom-small'>
        My Work
        <span className='u-underline__yellow u-underline__top'></span>
        <span className='u-underline__blue u-underline__bottom'></span>
      </h2>

      <Grid id='projects' className='projects__container projects__container--original' container>
        {!viewAll
          ? projects
              .slice(0, 5)
              .map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  size={project.size}
                  primary_color={project.primary_color}
                  secondary_color={project.secondary_color}
                />
              ))
          : projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                link={project.link}
                size={project.size}
                primary_color={project.primary_color}
                secondary_color={project.secondary_color}
              />
            ))}
      </Grid>

      <a
        id={`view--${viewAll ? 'less' : 'all'}`}
        className='btn btn--yellow btn--animated projects__button'
        onClick={() => setViewAll(!viewAll)}
      >
        {viewAll ? 'View Less' : 'View All'}
      </a>
    </section>
  );
}

export default ProjectsSection;
