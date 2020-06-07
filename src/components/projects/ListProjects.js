import React, { useContext, useEffect } from "react";
import Project from "./Project";
import projectContext from "../../context/projects/projectContext";
import alertContext from "../../context/alerts/alertContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ListProjects = () => {
  //use the projects context
  const projectsContext = useContext(projectContext);
  //extract variable projects from projectContext
  const { projects, obtainProjects, message } = projectsContext;

  const alertsContext = useContext(alertContext);
  const { alert, showAlert } = alertsContext;

  // use effect function
  useEffect(() => {
    if (message) {
      showAlert(message.msg, message.category);
    }
    obtainProjects();
    // eslint-disable-next-line
  }, [message]);

  //check if projects has content
  if (projects.length === 0) {
    return <p>There are no projects, start creating one.</p>;
  }

  return (
    <ul className="listado-proyectos">
      {alert ? (
        <div className={`alerta ${alert.category}`}>{alert.msg}</div>
      ) : null}
      <TransitionGroup>
        {projects.map((project) => (
          <CSSTransition key={project._id} timeout={250} classNames="proyecto">
            <Project project={project} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListProjects;
