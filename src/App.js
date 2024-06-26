import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <div className="App">
            <h1>Task Management</h1>
          </div>
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
