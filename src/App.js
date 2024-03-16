import { createBrowserRouter, Routes, Route,RouterProvider
 } from 'react-router-dom';
 import { AuthProvider } from './Auth'
import Home from './Home';
import Login from './Login'; 
import Register from './Register';

import GamingDashboard from './GamingDashboard';
import News from './News';
import SpecificNews from './SpecificNews';


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

function App() {
  
  return (
    <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
  )
}


export default App;