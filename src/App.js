import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Apples from "./components/Apples";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        {/* <Route path="/apples">
          <Apples />
        </Route> */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
