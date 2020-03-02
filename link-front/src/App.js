import React from 'react';
import {Route, Switch} from "react-router-dom";
import ShortenLinkPage from "./containers/ShortenLinkPage";

function App() {
  return (
    <Switch>
      <Route path='/' exact component={ShortenLinkPage}/>
    </Switch>
  );
}

export default App;
