import React from 'react';
import { ShoppingBag } from 'lucide-react';
import useStore from '../store/useStore';

export default function CartSummary() {
  const { cart } = useStore();
  
  const subtotal = cart.reduce(
    (sum, item) => sum + item.book.price * item.quantity,
    0
  );
  const shipping = subtotal > 50 ? 0 : 4.99;
  const total = subtotal + shipping;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <div className="space-y-3 text-gray-600">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>
            {shipping === 0 ? (
              <span className="text-green-600">Free</span>
            ) : (
              `$${shipping.toFixed(2)}`
            )}
          </span>
        </div>
        <div className="h-px bg-gray-200 my-4" />
        <div className="flex justify-between text-lg font-semibold text-gray-900">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        {subtotal < 50 && (
          <p className="text-sm text-gray-500 mt-2">
            Add ${(50 - subtotal).toFixed(2)} more to get free shipping!
          </p>
        )}
        <button className="w-full mt-6 bg-indigo-600 text-white py-3 px-6 rounded-lg flex items-center justify-center space-x-2 hover:bg-indigo-700 transition-colors">
          <ShoppingBag className="h-5 w-5" />
          <span>Proceed to Checkout</span>
        </button>
      </div>
    </div>
  );
}