import { Outlet } from "react-router-dom";
import Header from "../features/header/Header";
import Search from "../features/header/Search";
import Dashboard from "./Dashboard";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div>
      <div>
        <Dashboard />
      </div>
      <div className="layout">
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
