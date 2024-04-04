import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import Users from "./pages/Users.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app bg-[#fafaf9] w-screen h-screen">
      <NavBar />
      <Outlet />
    </div>
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
      // {
      //   path: "/contact",
      //   element: <Contact />,
      // },
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
