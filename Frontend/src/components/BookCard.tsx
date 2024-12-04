import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Book } from '../types';

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <Link to={`/book/${book.id}`}>
        <img
          src={book.coverUrl}
          alt={book.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 truncate">
            {book.title}
          </h3>
          <p className="text-sm text-gray-600 mb-2">{book.author}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm text-gray-600">{book.rating}</span>
            </div>
            <span className="text-lg font-bold text-indigo-600">
              ${book.price.toFixed(2)}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}