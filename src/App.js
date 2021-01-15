import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Home from "./components/index";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <div>
          <Switch>
            <Route exact patch="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
