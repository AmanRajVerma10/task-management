import { Link } from "react-router-dom/cjs/react-router-dom";

const MainNavigation = (props) => {
  return (
    <nav>
      <ul className="main-nav">
        <>
        <Link to='/test'>Home</Link>
        <Link to='/create'>Create Task</Link>
        </>
      </ul>
    </nav>
  );
};

export default MainNavigation;
