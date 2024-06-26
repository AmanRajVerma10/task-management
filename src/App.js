import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/Homepage";

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path='/' exact><HomePage></HomePage></Route>
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
