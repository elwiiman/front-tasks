import React, { useContext } from "react";
import projectContext from "../../context/projects/projectContext";

const FormTask = () => {
  const projectsContext = useContext(projectContext);
  const { projectFocus } = projectsContext;

  // if there is not project Focused
  if (!projectFocus) return null;

  //array destructruring
  const [projectSelected] = projectFocus;

  return (
    <div className="formulario">
      <form>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Task name..."
            name="taskName"
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-block btn-submit"
            value="Add task"
          />
        </div>
      </form>
    </div>
  );
};

export default FormTask;
