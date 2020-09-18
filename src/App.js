import React from "react";
import { Switch, Route } from "react-router-dom";
import PageErrorBoundary from "./Components/PageErrorBoundary";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Forms from "./Pages/FormHooks";
import Lists from "./Pages/List";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/forms">
          <PageErrorBoundary>
            <Forms />
          </PageErrorBoundary>
        </Route>
        <Route exact path="/lists">
          <PageErrorBoundary>
            <Lists />
          </PageErrorBoundary>
        </Route>
      </Switch>
    </div>
  );
}
