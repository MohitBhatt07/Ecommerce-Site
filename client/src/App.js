import React from "react";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import HomePage from './pages/Home/Home';
import ProductPage from './pages/Product/Product';
import Products from './pages/Products/Products';

const router = createBrowserRouter([
  {path :'/',element : <HomePage/>},
  {path : '/products/:id',element : <Products/>},
  {path : '/product/:id',element : <ProductPage/>}
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
