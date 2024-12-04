import BookGrid from '../components/BookGrid';
import { BookOpen, TrendingUp, Star, Clock } from 'lucide-react';

const categories = [
  { name: 'Fiction', icon: BookOpen, color: 'bg-blue-100 text-blue-600' },
  { name: 'Trending', icon: TrendingUp, color: 'bg-purple-100 text-purple-600' },
  { name: 'Top Rated', icon: Star, color: 'bg-yellow-100 text-yellow-600' },
  { name: 'New Releases', icon: Clock, color: 'bg-green-100 text-green-600' }
];

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to BookStore
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover your next favorite book from our carefully curated collection
        </p>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {categories.map(({ name, icon: Icon, color }) => (
          <button
            key={name}
            className={`${color} p-4 rounded-xl flex flex-col items-center justify-center space-y-2 hover:opacity-90 transition-opacity`}
          >
            <Icon className="h-6 w-6" />
            <span className="font-medium">{name}</span>
          </button>
        ))}
      </div>

      {/* Featured Books Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Featured Books</h2>
          <button className="text-indigo-600 hover:text-indigo-700 font-medium">
            View All
          </button>
        </div>
        <BookGrid />
      </div>

      {/* Newsletter Section */}
      <div className="bg-indigo-50 rounded-2xl p-8 mt-16">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h3>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for the latest book releases and exclusive offers
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}