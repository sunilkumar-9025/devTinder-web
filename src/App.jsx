import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import { Provider } from "react-redux";
import store from "./store";
import Feed from "./pages/Feed";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Login,
      },
      {
        path: "feed",
        Component: Feed,
      },
      {
        path: "logout",
        Component: Logout,
      },
      {
        path: "*",
        element: <Navigate to="/feed" />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
