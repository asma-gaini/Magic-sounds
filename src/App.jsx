import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Login from "./features/header/Login";
import MusicPlayList from "./features/playList/MusicPlayList";
import Music from "./features/playList/Music";
import Category from "./features/category/Category";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      { path: "/", element: <Home /> },
      {
        path: "/login",
        element: <Login />,
      },
      { path: "/playList", element: <MusicPlayList /> },

      {
        path: "/playList/:misicName",
        element: <Music />,
      },
      { path: "/category", element: <Category /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
