function ProductCard(props) {

  return (

    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">

      <img
        src={props.image}
        alt={props.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-4">

        <h2 className="text-xl font-bold text-gray-800">
          {props.name}
        </h2>

        <p className="text-gray-600 mt-2">
          {props.description}
        </p>

        <div className="flex justify-between items-center mt-4">

          <p className="text-2xl font-bold text-blue-600">
            ₹{props.price}
          </p>

          <button
            onClick={() => props.addToCart(props)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Add to Cart
          </button>

        </div>

      </div>

    </div>

  );
}

export default ProductCard;