import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import React from 'react'

import App from './App.jsx';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import VehiclesForRent from './pages/VehiclesForRent';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Reservation from './pages/Reservation.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: 'vehicles',
        element: <VehiclesForRent />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup/>
      },
      {
        path: 'reservations',
        element: <Reservation />
      },
    ],
  }
]);
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
  )
  