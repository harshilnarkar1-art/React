import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ProductCategory from './components/ProductCategory';
import Products from './components/Products';
import { createBrowserRouter, Link, Outlet, RouterProvider } from 'react-router-dom';
import Register from './components/Register';
import LogIn from './components/LogIn';
import Counter from './components/Counter';
import NewCounter from './components/NewCounter';
import UseOfMemo from './components/UseOfMemo';
import ErrorBoundary from './components/ErrorBoundary';


function App() {
  let router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <NavBar />
          <h1>HOME PAGE</h1>
          <Link to={"product-category"}>Product Category</Link>
          {/* <Outlet /> */}
          <Footer />
        </>
      ),
      children: [
        {
          path: 'product-category',
          element: <ProductCategory />
        },
        {
          path: 'user',
          element: <h1>Hello User Profile Page</h1>
        },
        {
          path: 'register',
          element: <Register />
        },
        {
          path: 'login',
          element: <LogIn />
        },
      ]
    },

    {
      path: "/products",
      element: (
        <>
          <NavBar />
          <Products link="https://dummyjson.com/products" />
          <Footer />
        </>
      )
    },
    {
      path: "/counter",
      element: (
        <>
          <NavBar />
          <ErrorBoundary >

            <Counter />
          </ErrorBoundary>
          <Footer />
        </>
      )
    },
    {
      path: "/new-counter",
      element: (
        <>
          <NavBar />
          <NewCounter />
          <Footer />
        </>
      )
    },
    {
      path: "/memo",
      element: (
        <>
          <NavBar />
          <UseOfMemo />
          <Footer />
        </>
      )
    },
    {
      path: "/products/category/:categoryName",
      element: (
        <>
          <NavBar />
          <Products link="https://dummyjson.com/products/category/" />
          <Footer />
        </>
      )
    },
    {
      path: "*",
      element: (
        <>404 Not Found</>
      )
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};


export default App;
