import React from 'react';
import logo from './logo.svg';
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import routes from './routes';

const router = createBrowserRouter(routes);

function App() {
  return (
    <div className="bg-gradient-to-b from-[#659DBD] via-[#FFFFFF] to-[#C7BB31] ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
