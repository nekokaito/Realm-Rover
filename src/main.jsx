import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './layouts/root/Root';
import Home from './layouts/main/Home';
import Update from './layouts/main/Update';
import Profile from './layouts/main/Profile';
import Login from './layouts/account/Login';
import Register from './layouts/account/Register';
import AuthProvider from './provider/AuthProvider';
import Details from './layouts/main/header/estate/Details';
import Private from './provider/Private';
import Error from './layouts/error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/data.json')
      },
      {
       path: "/estate/:id",
       element: <Private><Details></Details></Private> ,
       loader: () => fetch('/data.json')
      },
      {
        path: "/update",
        element: <Private><Update></Update></Private>
      },
      {
        path: "/profile",
        element: <Profile></Profile>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

