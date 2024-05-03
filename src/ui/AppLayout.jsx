import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.css";
import Header from "../features/header/Header";
import Search from "../features/header/Search";
import Dashboard from "./Dashboard";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className={styles.side}>
      <div>
        <Dashboard />
      </div>
      <div className={styles.layout}>
        <Header />
        <Search />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default AppLayout;
