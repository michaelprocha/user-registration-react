import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./page/Home";
import MainLayout from "./components/layouts/MainLayout";
import Register from "./page/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "register", Component: Register },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
