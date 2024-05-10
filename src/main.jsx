import React from 'react'
import ReactDOM from 'react-dom/client'

// router area start
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from './App';
import Home from './Page/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
    children:[
      {
        path:"/",
        element:<Home/>
      }
    ]
  },
  
]);
// router area end

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
)
