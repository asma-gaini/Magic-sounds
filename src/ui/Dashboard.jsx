import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <Link to="/category">Category</Link>
      <Link to="/favorit">Favorit</Link>
      <Link to="/aboutUs">aboutUs</Link>
    </div>
  );
}

export default Dashboard;
