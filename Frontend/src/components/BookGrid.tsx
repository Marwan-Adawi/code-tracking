import { useState } from 'react';
import BookCard from './BookCard';
import useStore from '../store/useStore';
import { Book } from '../types';

export default function BookGrid() {
  const { books } = useStore();
  const [isLoading] = useState(false);

  // Placeholder loading cards
  const LoadingCard = () => (
    <div className="bg-white rounded-xl shadow-sm p-4 space-y-3">
      <div className="aspect-[3/4] bg-gray-200 rounded-lg animate-pulse" />
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded animate-pulse" />
        <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3" />
        <div className="flex justify-between items-center pt-2">
          <div className="h-6 w-20 bg-gray-200 rounded animate-pulse" />
          <div className="h-8 w-24 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );

  const renderBooks = (books: Book[]) => {
    if (isLoading) {
      return Array(8).fill(null).map((_, index) => (
        <LoadingCard key={`loading-${index}`} />
      ));
    }

    if (books.length === 0) {
      return (
        <div className="col-span-full text-center py-12">
          <p className="text-gray-500 text-lg">No books found</p>
        </div>
      );
    }

    return books.map((book) => (
      <BookCard key={book.id} book={book} />
    ));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {renderBooks(books)}
    </div>
  );
}