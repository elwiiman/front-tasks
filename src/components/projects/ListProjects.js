import React, { useContext, useEffect } from "react";
import Project from "./Project";
import projectContext from "../../context/projects/projectContext";

const ListProjects = () => {
  //use the projects context
  const projectsContext = useContext(projectContext);
  //extract variable projects from projectContext
  const { projects, obtainProjects } = projectsContext;

  // use effect function
  useEffect(() => {
    obtainProjects();
  }, []);

  //check if projects has content
  if (projects.length === 0) {
    return <p>There are no projects, start creating one.</p>;
  }

  return (
    <ul className="listado-proyectos">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ListProjects;
