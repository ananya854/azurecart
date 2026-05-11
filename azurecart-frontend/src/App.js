import { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {

    setCart([...cart, product]);

    alert(product.name + " added to cart");

  };

  const removeFromCart = (index) => {

    const updatedCart = [...cart];

    updatedCart.splice(index, 1);

    setCart(updatedCart);

  };

  return (

    <BrowserRouter>

      <div className="min-h-screen bg-gray-100">

        {/* Navbar */}
        <nav className="bg-blue-600 text-white p-4 shadow-lg">

          <div className="max-w-7xl mx-auto flex justify-between items-center">

            <h1 className="text-2xl font-bold">
              AzureCart
            </h1>

            <div className="space-x-6">

              <Link
                to="/"
                className="hover:text-gray-200"
              >
                Home
              </Link>

              <Link
                to="/cart"
                className="hover:text-gray-200"
              >
                Cart ({cart.length})
              </Link>

            </div>

          </div>

        </nav>

        {/* Routes */}
        <Routes>

          <Route
            path="/"
            element={<Home addToCart={addToCart} />}
          />

          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                removeFromCart={removeFromCart}
              />
            }
          />

        </Routes>

      </div>

    </BrowserRouter>

  );
}

export default App;