import "./App.css";
import { Route, Switch } from "react-router";
import Add from "./Page/Add";
import ERROR from "./Page/ERROR";
import Home from "./Page/Home";

import Navbr from "./Component/Navbar";
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="App">
      <Navbr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path={["/add", "/edit/:id"]} component={Add} />
        <Route path="/*" component={ERROR} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
