import React from 'react';

export default function ProjectCard(props:any) {
  return (
    <>
         {props.projects.map((project:any) => (
            <div key={project.id}>
                <span>{project.name}</span>
                <span>{project.des}</span>
                {project.tags.map((t:any) => (
                    <span>{t}</span>
                ))}
            </div>
            
        ))}
    </>
  );
}
