import { createBrowserRouter, Routes, Route,RouterProvider
 } from 'react-router-dom';
 import { AuthProvider } from './Auth'
import Home from './Home';
import Login from './Login'; 
import Register from './Register';
import Dashboard from './Dashboard';
import GamingDashboard from './GamingDashboard';
import News from './News';
import SpecificNews from './SpecificNews';
import Studio from './Studios';


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
      },
      {
        path: "mydashboard",
        element: <Dashboard />,
        
      },
      {
        path:"studios",
        element:<div className="studio-container">
        <Studio />
      </div>
      
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