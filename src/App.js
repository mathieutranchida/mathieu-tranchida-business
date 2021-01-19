import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Home from "./components/resume/index";
import PhotoPortfolio from "./components/portfolios/photoPortfolio/index";
import DesignPortfolio from "./components/portfolios/designPortfolio/index";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/portfolio-photo" component={PhotoPortfolio} />
            <Route exact path="/portfolio-design" component={DesignPortfolio} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
