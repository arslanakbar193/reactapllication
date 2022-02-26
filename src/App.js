import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle';
import Dashboard from "./screens/Dashboard";
import ErrorPage from "./screens/404";
import Sample from "./screens/samplePage";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loginauth from "./screens/loginauth";

function App() {
  return (
    <>

    <Router>
      <Switch>
        <Route exact path="/" component={Loginauth}></Route>
        <Route exact path="/dashboard" component={Dashboard}></Route>
        <Route exact path="/sample" component={Sample}/>
        <Route path="*" component={ErrorPage} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
