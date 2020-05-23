import React from "react";
import FormNewProject from "../projects/FormNewProject";
const Sidebar = () => {
  return (
    <aside>
      <h1>
        MERN<span>Task</span>
      </h1>
      <FormNewProject />
      <div className="proyectos">
        <h2>Your Projects</h2>
      </div>
    </aside>
  );
};

export default Sidebar;
