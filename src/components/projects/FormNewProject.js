import React, { Fragment } from "react";
const FormNewProject = () => {
  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario">
        New Project
      </button>

      <form className="formulario-nuevo-proyecto">
        <input
          type="text"
          className="input-text"
          placeholder="Project Name"
          name="projectName"
        />
        <input
          type="submit"
          className="btn btn-primario btn-block"
          value="Add project"
        />
      </form>
    </Fragment>
  );
};

export default FormNewProject;
