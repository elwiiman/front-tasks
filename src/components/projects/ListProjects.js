import React, { useContext, useEffect } from "react";
import Project from "./Project";
import projectContext from "../../context/projects/projectContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ListProjects = () => {
  //use the projects context
  const projectsContext = useContext(projectContext);
  //extract variable projects from projectContext
  const { projects, obtainProjects } = projectsContext;

  // use effect function
  useEffect(() => {
    obtainProjects();
    // eslint-disable-next-line
  }, []);

  //check if projects has content
  if (projects.length === 0) {
    return <p>There are no projects, start creating one.</p>;
  }

  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
        {projects.map((project) => (
          <CSSTransition key={project.id} timeout={250} classNames="proyecto">
            <Project project={project} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListProjects;
