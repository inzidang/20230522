import React from 'react';
import ReactDOM from 'react-dom/client';

import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Contact from "./router";
import Profile from './Profile';
import App from './App';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: "/profile",
    element: <Profile/>
  },
  {
    path: "/contact",
    element: <Contact/>
  }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
  </ChakraProvider>
  </React.StrictMode>
);
