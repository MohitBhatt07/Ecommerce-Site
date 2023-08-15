import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/Home/Home";
import ProductPage from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import MainLayout from "./pages/Layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {index:true, element: <HomePage /> },
      { path: "/products/:id", element: <Products /> },
      { path: "/product/:id", element: <ProductPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
