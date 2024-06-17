import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./utils/apolloClient";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import React from "react";

import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import VehiclesForRent from "./pages/VehiclesForRent";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
/* import Reservation from "./pages/Reservation"; */

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "vehicles",
        element: <VehiclesForRent />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <RouterProvider router={router} />
  </ApolloProvider>
);
