import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, BookOpen } from 'lucide-react';
import useStore from '../store/useStore';

export default function Navbar() {
  const { cart, user } = useStore();
  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-800">BookStore</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-600" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>
            <Link to={user ? "/account" : "/login"}>
              <User className="h-6 w-6 text-gray-600" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}