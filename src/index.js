import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter,Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import Login from './Login'; 
import Register from './Register';
import GamingDashboard from './GamingDashboard';
import News from './News';
import { AuthProvider } from './Auth'


const container = document.getElementById('root');
const root = createRoot(container);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    
    children: [
      {
        path: "/login",
        element: <Login />,
      },
        {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/dashboard",
        element: <GamingDashboard />,
      },
      {
        path: "/news",
        element: <News />,
      }
    ],
  },
 
])
root.render(
  <StrictMode>
     <AuthProvider>
    <RouterProvider router={router} />
    
     
    </AuthProvider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
