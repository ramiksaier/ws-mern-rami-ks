import { Route, Switch } from "react-router";
import Add from "./Page/Add";
import ERROR from "./Page/ERROR";
import Home from "./Page/Home";
import "./App.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="App">
      <h1>Mern app</h1>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add" component={Add} />
        <Route path="/*" component={ERROR} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
