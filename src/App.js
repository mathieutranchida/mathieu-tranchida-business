import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Home from "./components/resume/index";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
