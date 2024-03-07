import { createBrowserRouter, Routes, Route,RouterProvider
 } from 'react-router-dom';

import Home from './Home';
import Login from './Login'; 
import Register from './Register';
<RouterProvider router={router}>
  <App /> 
</RouterProvider>

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
    ],
  },
])

function App() {
  
  return (
    <Home/>
  )
}


export default App;