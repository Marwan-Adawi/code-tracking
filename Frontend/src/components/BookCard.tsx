import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Book } from '../types';
import useStore from '../store/useStore';

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  const { addToCart } = useStore();

  return (
    <div 
      className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Favorite button */}
      <button 
        className="absolute top-3 right-3 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full 
                   shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300
                   hover:bg-white hover:text-rose-500"
      >
        <Heart className="h-4 w-4" />
      </button>

      <Link to={`/book/${book.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden rounded-t-xl">
          <img
            src={book.coverUrl}
            alt={book.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-4">
          {/* Genre & Rating */}
          <div className="flex items-center justify-between mb-3">
            <span className="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full">
              {book.genre}
            </span>
            <div className="flex items-center text-yellow-400">
              <Star className="h-4 w-4 fill-current" />
              <span className="ml-1 text-sm font-medium text-gray-700">{book.rating}</span>
            </div>
          </div>

          {/* Title & Author */}
          <h3 className="font-semibold text-gray-900 leading-tight mb-1 line-clamp-1">
            {book.title}
          </h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-1">by {book.author}</p>

          {/* Price & Add to Cart */}
          <div className="flex items-center justify-between mt-auto">
            <div className="flex flex-col">
              <span className="text-lg font-bold text-indigo-600">
                ${book.price.toFixed(2)}
              </span>
              {book.stock < 5 && book.stock > 0 && (
                <span className="text-xs text-orange-600">
                  Only {book.stock} left
                </span>
              )}
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addToCart(book);
              }}
              disabled={book.stock === 0}
              className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg transition-all duration-300
                ${book.stock === 0 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
            >
              <ShoppingCart className="h-4 w-4" />
              <span>{book.stock === 0 ? 'Out of Stock' : 'Add'}</span>
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}