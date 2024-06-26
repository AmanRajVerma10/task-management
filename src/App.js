import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/Homepage";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import TaskCreationPage from "./pages/TaskCreationPage";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact><HomePage /></Route>
          <Route path="/task/:id"><TaskDetailsPage /></Route>
          <Route path="/create"><TaskCreationPage /></Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
