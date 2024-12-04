import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';
import useStore from '../store/useStore';

export default function CartPage() {
  const { cart } = useStore();

  if (cart.length === 0) {
    return (
      <div className="text-center py-16">
        <ShoppingCart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Your cart is empty
        </h2>
        <p className="text-gray-600 mb-8">
          Looks like you haven't added any books to your cart yet.
        </p>
        <Link
          to="/"
          className="inline-block bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <CartItem key={item.book.id} item={item} />
          ))}
        </div>
        <div>
          <CartSummary />
        </div>
      </div>
    </div>
  );
}