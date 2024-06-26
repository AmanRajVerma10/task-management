import { Link } from "react-router-dom/cjs/react-router-dom";
import HomePage from "../pages/Homepage";

const MainNavigation = (props) => {
  const token = localStorage.getItem("token");

  return (
    <nav>
      <ul className="main-nav">
        <>
        <Link to='/test'><HomePage/></Link>
        </>
      </ul>
    </nav>
  );
};

export default MainNavigation;
