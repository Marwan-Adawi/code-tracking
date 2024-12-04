import { ShoppingBag, Truck, CreditCard, Shield } from 'lucide-react';
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
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Order Summary</h2>
      
      {/* Price breakdown */}
      <div className="space-y-4">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal ({cart.length} items)</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span>
            {shipping === 0 ? (
              <span className="text-green-600 font-medium">Free</span>
            ) : (
              `$${shipping.toFixed(2)}`
            )}
          </span>
        </div>
        {subtotal < 50 && (
          <div className="p-3 bg-indigo-50 rounded-lg">
            <div className="flex items-center space-x-2 text-indigo-700">
              <Truck className="h-5 w-5 flex-shrink-0" />
              <p className="text-sm">
                Add <span className="font-semibold">${(50 - subtotal).toFixed(2)}</span> more to get free shipping!
              </p>
            </div>
          </div>
        )}
        <div className="h-px bg-gray-200" />
        <div className="flex justify-between text-lg font-semibold text-gray-900">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      {/* Checkout button */}
      <button className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg flex items-center justify-center space-x-2 hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={cart.length === 0}>
        <ShoppingBag className="h-5 w-5" />
        <span>Proceed to Checkout</span>
      </button>

      {/* Additional info */}
      <div className="grid grid-cols-2 gap-4 pt-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <CreditCard className="h-4 w-4" />
          <span>Secure Payment</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Shield className="h-4 w-4" />
          <span>Buyer Protection</span>
        </div>
      </div>
    </div>
  );
}