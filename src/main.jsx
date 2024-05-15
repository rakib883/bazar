import React from 'react'
import ReactDOM from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css';
// router area start
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from './App';
import Home from './Page/Home';
import SingleProduct from './Page/SingleProduct';
import NotFound from './Page/NotFound';
import Account from './Page/Account';
import CartPage from './Page/CartPage';
import { Provider } from 'react-redux';
import { persister, store } from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react';


const router = createBrowserRouter([
  {
    path:"/login",
    element:<Account/>
  },
  {
    path: "/",
    element:<App />,
    children:[
      {
        path:"/",
        element:<Home/>
      },
       {
         path:"/product/:productId",
         element:<SingleProduct/>,
         loader:({params})=> fetch(`https://fakestoreapi.com/products/${params.productId}`)
       },
      {
        path:"/*",
        element:<NotFound />
        
      },
      {
        path:"/cart",
        element:<CartPage />
      }
    ]
  },
  
]);
// router area end

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
          <Provider store={store}>
             <PersistGate loading={"loading"} persistor={persister}>
                <RouterProvider router={router} />
             </PersistGate>
          </Provider>
 </React.StrictMode>
)
