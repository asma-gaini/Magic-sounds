import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Logo />
      <Link to="/login">Login 🤵🏽</Link>
    </header>
  );
}

export default Header;
