import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/'>
            <Login/>
          </Route>
          <Route exact path='/home'>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
