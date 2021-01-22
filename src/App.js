import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import FooterBar from "./components/FooterBar";
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
      <FooterBar />
    </Router>
  );
}

export default App;
