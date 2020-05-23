import React, { Fragment, useState } from "react";
const FormNewProject = () => {
  //state
  const [dataProject, setDataProject] = useState({ projectName: "" });

  //destructure data of dataProject
  const { projectName } = dataProject;

  //detect changes in inputs
  const onChangeData = (e) => {
    setDataProject({ ...dataProject, [e.target.name]: e.target.value });
  };

  //submit a project
  const onSubmitProject = (e) => {
    e.preventDefault();

    //validate fields

    //add to state

    //reset form
  };

  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario">
        New Project
      </button>

      <form onSubmit={onSubmitProject} className="formulario-nuevo-proyecto">
        <input
          type="text"
          className="input-text"
          placeholder="Project Name"
          name="projectName"
          onChange={onChangeData}
          value={projectName}
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
