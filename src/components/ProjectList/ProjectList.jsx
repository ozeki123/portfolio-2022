import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import Project from './Project/Project';
import './ProjectList.scss';

function ProjectList({ data }) {
  const projectRef = useRef(null);
  useEffect(() => {
    gsap.to(projectRef.current, {
      css: { visibility: 'visible' },
      duration: 0,
    });
  }, []);
  return (
    <div className="project-list">
      {data.projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;
