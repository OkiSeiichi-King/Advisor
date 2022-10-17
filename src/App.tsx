import React from 'react';
import logo from './logo.svg';
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import routes from './routes';

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
