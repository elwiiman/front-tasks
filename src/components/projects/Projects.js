import React, { useContext, useEffect } from "react";
import Sidebar from "../layout/Sidebar.js";
import Bar from "../layout/Bar.js";
import FormTask from "../tasks/FormTask";
import ListTasks from "../tasks/ListTasks";
import authContext from "../../context/authentication/authContext";

const Projects = (props) => {
  //Extract authenticacion info from context
  const authsContext = useContext(authContext);
  const { obtainUserAuthenticated } = authsContext;

  useEffect(() => {
    obtainUserAuthenticated();

    //eslint-disable-next-line
  }, []);

  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <Bar />
        <main>
          <FormTask />
          <div className="contenedor-tareas">
            <ListTasks />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
