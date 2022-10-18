import React from 'react';
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import routes from './routes';
import Header from './layouts/Header';

const router = createBrowserRouter(routes);

function App() {
  return (
    <div className="bg-gradient-to-b from-[#659DBD] via-[#FFFFFF] to-[#C7BB31] relative">
      <Header>
        <RouterProvider router={router} />
      </Header>
    </div>
  );
}

export default App;
