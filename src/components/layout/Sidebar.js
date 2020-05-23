import React from "react";
import FormNewProject from "../projects/FormNewProject";
import ListProjects from "../projects/ListProjects";

const Sidebar = () => {
  return (
    <aside>
      <h1>
        MERN<span>Task</span>
      </h1>
      <FormNewProject />
      <div className="proyectos">
        <h2>Your Projects</h2>
        <ListProjects />
      </div>
    </aside>
  );
};

export default Sidebar;
