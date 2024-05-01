import { Link } from "react-router-dom";
import Logo from "./Logo";

function Header() {
  return (
    <header>
      <Logo />
      <Link to="/login">Login 🤵🏽</Link>
    </header>
  );
}

export default Header;
