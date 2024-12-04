import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, BookOpen, Search, Menu, X } from 'lucide-react';
import useStore from '../store/useStore';

export default function Navbar() {
  const { cart, user } = useStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-800 hidden sm:block">BookStore</span>
            </Link>
          </div>

          <div className="flex-1 max-w-2xl mx-4 hidden md:block">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for books, authors, or genres..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-50"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </form>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/cart"
              className="relative p-2 text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>
            <Link
              to={user ? "/account" : "/login"}
              className="p-2 text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <User className="h-6 w-6" />
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-indigo-600 transition-colors md:hidden"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <form onSubmit={handleSearch} className="relative mb-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search books..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-50"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </form>
          </div>
        )}
      </div>
    </nav>
  );
}