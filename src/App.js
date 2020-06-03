import React from "react";
import Login from "./components/auth/Login";
import NewAccount from "./components/auth/NewAccount";
import Projects from "./components/projects/Projects";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProjectState from "./context/projects/ProjectState";
import TaskState from "./context/tasks/TaskState";
import AlertState from "./context/alerts/AlertState";

function App() {
  return (
    <ProjectState>
      <TaskState>
        <AlertState>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/new-account" component={NewAccount} />
              <Route exact path="/projects" component={Projects} />
            </Switch>
          </Router>
        </AlertState>
      </TaskState>
    </ProjectState>
  );
}

export default App;
