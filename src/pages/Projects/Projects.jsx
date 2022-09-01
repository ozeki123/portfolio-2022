import React from 'react';
import ProjectList from '../../components/ProjectList/ProjectList';
import data from '../../data/projects.json';
import './Projects.scss';

function Projects() {
  return (
    <div className="projects-container" data-scroll-section>
      <ProjectList data={data} />
    </div>
  );
}

export default Projects;
