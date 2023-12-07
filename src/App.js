import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductList from './components/ProductList';
import Header from './components/Header';
import Cart from './components/Cart';
import "./styles/app.css";

import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Outlet, 
  Route, 
  RouterProvider } from "react-router-dom";

  export default function App() {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<Root />}>
          <Route index element={<ProductList />}/>
          <Route path='/cart' element={<Cart />}/>
        </Route>
      )
    )

    return (
      <div className='App'>
        <RouterProvider router={router} />
      </div>
    )
  }

  const Root = () => {
    return(
      <>
        <div>
          <Header />
          <Outlet />
        </div>
      </>
    )
  }
