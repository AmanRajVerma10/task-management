import { Link } from "react-router-dom";

const MainNavigation = (props) => {
  return (
    <nav>
      <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/create">Create Task</Link></li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
