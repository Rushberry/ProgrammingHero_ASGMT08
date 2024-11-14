import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Root from './Root';
import Error404 from './assets/Error404';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Dashboard from './components/Dashboard/Dashboard';
import Contact from './components/Contact/Contact';
import ProductDetails from './components/Products/ProductDetails';
import DataProvider from './Provider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error404></Error404>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/gadgets.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/home',
        element: <Home></Home>,
        loader: () => fetch('/gadgets.json')
      },
      {
        path: '/product/:id',
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('/gadgets.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
<StrictMode>
  <DataProvider>
    <RouterProvider router={router} />
  </DataProvider>
</StrictMode>,
)
