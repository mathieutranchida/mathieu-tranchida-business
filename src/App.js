import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Home from "./components/resume/index";
import PhotoGrid from "./components/portfolios/photoPortfolio/index";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/portfolio-photo" component={PhotoGrid} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
