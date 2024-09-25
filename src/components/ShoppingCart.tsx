// import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, addToCart } from "../features/shoppingCartSlice";

import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../store";
import { Item } from "../interface/types";

const ShoppingCart = () => {
  // Get the shopping cart from the store
  const { shoppingCart  } = useSelector(
    (state: RootState) => state.shoppingCart
  );

  // Set up hooks
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  // Remove from cart function
  // const handleRemoveFromCart = useCallback(
  //   (item: Item) => {
  //     try {
  //       dispatch(removeFromCart(item));
  //     } catch (error) {
  //       console.error("Error removing product from cart:", error);
  //     }
  //   },
  //   [dispatch]
  // );

  // Increase quantity function
  const handleUpdateQuantity = (item: Item, quantity: number) => {
    dispatch(addToCart({ ...item, quantity })); // Update the item with the new quantity
  };

  // Remove item entirely from cart
  const handleRemoveItem = (item: Item) => {
    dispatch(removeFromCart(item));
  };

  // Calculate subtotal
  const subtotal = shoppingCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  
  const taxRate = 0.08;
  const tax = subtotal * taxRate;
  const grandTotal = subtotal + tax;

  return (
<div className="container mx-auto p-6">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    
    {/* Left Column: Cart Items */}
    <div className="lg:col-span-2 shadow-lg rounded-lg p-6 bg-gray-100">
      <h3 className="text-2xl font-semibold mb-6">Cart ({shoppingCart.length} item{shoppingCart.length > 1 && 's'})</h3>
      {shoppingCart.length > 0 ? (
        <>
          {shoppingCart.map((item: Item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md mb-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image || "https://via.placeholder.com/50"}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-gray-500">${item.price.toFixed(2)}</p>
                  <button
                    className="text-sm text-red-500 hover:text-red-700 mt-2"
                    onClick={() => handleRemoveItem(item)}
                  >
                    Remove Item
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <select
                  value={item.quantity}
                  onChange={(e) => handleUpdateQuantity(item, parseInt(e.target.value))}
                  className="border border-gray-300 rounded p-1"
                >
                  {[...Array(10).keys()].map((num) => (
                    <option key={num + 1} value={num + 1}>
                      {num + 1}
                    </option>
                  ))}
                </select>
                <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="text-center py-10">
          <p className="text-lg">Your cart is empty.</p>
          <button
            className="mt-6 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
            onClick={() => navigate("/products")}
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>
    
    {/* Right Column: Summary Section */}
    <div className="shadow-lg rounded-lg p-6 bg-gray-50">
      <h4 className="text-xl font-semibold mb-6">Order Summary</h4>
      <div className="flex justify-between mb-2">
        <span className="text-gray-600">Subtotal ({shoppingCart.length} item{shoppingCart.length > 1 && 's'})</span>
        <span className="font-medium">${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="text-gray-600">Taxes</span>
        <span>Calculated at checkout</span>
      </div>
      <div className="flex justify-between text-lg font-semibold">
        <span>Estimated Total</span>
        <span>${grandTotal.toFixed(2)}</span>
      </div>
      <button
        className="bg-green-500 text-white w-full py-3 mt-6 rounded hover:bg-green-600"
        onClick={() => navigate("/checkout")}
      >
        Checkout
      </button>
      <button
        className="mt-4 w-full text-center text-gray-600 hover:underline"
        onClick={() => navigate("/products")}
      >
        Continue Shopping
      </button>
    </div>
    
  </div>
</div>

  );
};

export default ShoppingCart;

