import { useParams } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import useStore from '../store/useStore';

export default function BookDetailsPage() {
  const { id } = useParams();
  const { books, addToCart } = useStore();
  const book = books.find((b) => b.id === id);

  if (!book) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-900">Book not found</h2>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <img
          src={book.coverUrl}
          alt={book.title}
          className="w-full rounded-lg shadow-lg"
        />
      </div>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">{book.title}</h1>
        <p className="text-xl text-gray-600">by {book.author}</p>
        <div className="flex items-center space-x-2">
          <Star className="h-5 w-5 text-yellow-400 fill-current" />
          <span className="text-lg text-gray-700">{book.rating}</span>
        </div>
        <p className="text-gray-700">{book.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-indigo-600">
            ${book.price.toFixed(2)}
          </span>
          <span className="text-sm text-gray-600">
            {book.stock} copies available
          </span>
        </div>
        <button
          onClick={() => addToCart(book)}
          className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg flex items-center justify-center space-x-2 hover:bg-indigo-700 transition-colors"
        >
          <ShoppingCart className="h-5 w-5" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}