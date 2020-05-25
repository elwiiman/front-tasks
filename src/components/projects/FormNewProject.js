import React, { Fragment, useState, useContext } from "react";
import projectContext from "../../context/projects/projectContext";

const FormNewProject = () => {
  //obtain context of projectContext
  const projectsContext = useContext(projectContext);

  //destruct of projects context
  const {
    newProjectForm,
    errorInForm,
    showNewProjectForm,
    addProject,
    showError,
  } = projectsContext;

  //state od THIS component
  const [dataProject, setDataProject] = useState({ name: "" });

  //destructure data of dataProject
  const { name } = dataProject;

  //detect changes in inputs
  const onChangeData = (e) => {
    setDataProject({ ...dataProject, [e.target.name]: e.target.value });
  };

  //submit a project
  const onSubmitProject = (e) => {
    e.preventDefault();

    //validate fields
    if (name === "") {
      showError();
      return;
    }
    //add to state
    addProject(dataProject);

    //reset form
    setDataProject({ name: "" });
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={() => showNewProjectForm()}
      >
        New Project
      </button>

      {newProjectForm ? (
        <form onSubmit={onSubmitProject} className="formulario-nuevo-proyecto">
          <input
            type="text"
            className="input-text"
            placeholder="Project Name"
            name="name"
            onChange={onChangeData}
            value={name}
          />
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Add project"
          />
        </form>
      ) : null}

      {errorInForm ? (
        <p className="mensaje error">Name of project is mandatory</p>
      ) : null}
    </Fragment>
  );
};

export default FormNewProject;
