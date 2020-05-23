import React from "react";
import Project from "./Project";

const projects = [
  { name: "Tienda Virtual" },
  { name: "Intranet" },
  { name: "Diseño sitio web" },
];

const ListProjects = () => {
  return (
    <ul className="listado-proyectos">
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </ul>
  );
};

export default ListProjects;
