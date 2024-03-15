import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import Login from './Login'; 
import Register from './Register';
import GamingDashboard from './GamingDashboard';
import News from './News';
import { AuthProvider } from './Auth'
import SpecificNews from './SpecificNews';

const container = document.getElementById('root');
const root = createRoot(container);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "dashboard",
        element: <GamingDashboard />,
      },
      {
        path: "news",
        element: <News />,
      },
      // Separate route for specific news item
      {
        path: "news/:id",
        element: <SpecificNews />,
      }
    ],
  },
]);

root.render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);

reportWebVitals();
