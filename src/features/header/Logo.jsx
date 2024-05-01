import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
function Logo() {
  return (
    <Link to="/">
      <img
        className={styles.logo}
        src="../../../public/image/logo.png"
        alt="Magic sound logo"
      />
    </Link>
  );
}

export default Logo;
