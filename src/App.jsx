import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import About from "./Pages/About/About";
const Portfolio = lazy(() => import("./Pages/Portfolio/Portfolio"));
import NotFound from "./Pages/NotFound/NotFound";
const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "/", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
