function Cart({ cart, removeFromCart }) {

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (

    <div className="max-w-5xl mx-auto p-6">

      <h2 className="text-4xl font-bold mb-8 text-gray-800">
        Shopping Cart
      </h2>

      {cart.length === 0 ? (

        <p className="text-lg text-gray-600">
          Your cart is empty
        </p>

      ) : (

        <div className="space-y-6">

          {cart.map((item, index) => (

            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-md flex justify-between items-center"
            >

              <div>

                <h3 className="text-xl font-bold">
                  {item.name}
                </h3>

                <p className="text-gray-600">
                  ₹{item.price}
                </p>

              </div>

              <button
                onClick={() => removeFromCart(index)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Remove
              </button>

            </div>

          ))}

          <div className="text-right text-2xl font-bold text-blue-600">

            Total: ₹{total}

          </div>

        </div>

      )}

    </div>

  );
}

export default Cart;