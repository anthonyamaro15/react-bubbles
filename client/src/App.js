import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BubblePage from "./components/BubblePage";
import PrivateRoute from "./protected/PrivateRoute";

import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Log in</h1>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/bubbles" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
