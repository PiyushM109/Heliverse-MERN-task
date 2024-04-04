import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import Users from "./pages/Users.jsx";
import appStore from "./Utils/appStore.jsx";
import Team from "./pages/Team.jsx";
import { Provider } from "react-redux";
import "./index.css";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <div className="app bg-[#fafaf9] w-screen h-screen">
      <NavBar />
      <Outlet />
    </div>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/createTeam",
        element: <Team />,
      },
      // {
      //   path:"/restaurant/:resId",
      //   element: <RestaurantMenu />
      // },
      // {
      //   path:"/cart",
      //   element: <Cart />
      // }
    ],
    // errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
