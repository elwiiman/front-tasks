import React from "react";
import Sidebar from "../layout/Sidebar.js";
import Bar from "../layout/Bar.js";

const Projects = () => {
  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <Bar />
        <main>
          <div className="contenedor-tareas"></div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
