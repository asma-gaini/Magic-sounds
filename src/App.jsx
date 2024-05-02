import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Login from "./features/header/Login";
import MusicPlayList from "./features/playList/MusicPlayList";
import Music from "./features/playList/Music";
import Category from "./features/category/Category";
import Favorit from "./features/playList/Favorit";
import AboutUs from "./ui/AboutUs";
import CreateAccount from "./features/header/CreateAccount";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      { path: "/", element: <Home /> },
      {
        path: "/login",
        element: <Login />,
      },
      { path: "/login/create", element: <CreateAccount /> },
      { path: "/playList", element: <MusicPlayList /> },

      {
        path: "/playList/:misicName",
        element: <Music />,
      },
      { path: "/category", element: <Category /> },
      { path: "/favorit", element: <Favorit /> },
      { path: "/aboutUs", element: <AboutUs /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
