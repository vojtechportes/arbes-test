import * as React from "react";
import { AppBar } from "src/client/components/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "./Homepage/index";
import AddContact from "./AddContact/index";
import Contacts from "./Contacts";

class App extends React.Component {
  public render() {
    return (
      <>
        <Router>
          <>
            <AppBar />
            <Switch>
              <Route exact={true} path="/" component={Homepage} />
              <Route exact={true} path="/add-contact" component={AddContact} />
              <Route exact={true} path="/contacts" component={Contacts} />
            </Switch>
          </>
        </Router>
      </>
    );
  }
}

export default App;
