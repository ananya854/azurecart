import { useEffect, useState } from "react";
import axios from "axios";

import ProductCard from "../components/ProductCard";

function Home({ addToCart }) {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetchProducts();

  }, []);

  const fetchProducts = async () => {

    try {

      const response = await axios.get(
        "https://azurecartbackend847.azurewebsites.net/products"
      );

      setProducts(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div>

      {/* Hero Section */}
      <div className="text-center py-16">

        <h2 className="text-5xl font-bold text-gray-800">
          Welcome to AzureCart
        </h2>

        <p className="text-lg text-gray-600 mt-4">
          Professional Cloud E-Commerce Platform
        </p>

      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-6 pb-16">

        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {products.map((product) => (

            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
              image={product.image}
              addToCart={addToCart}
            />

          ))}

        </div>

      </div>

    </div>

  );
}

export default Home;