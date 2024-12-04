import React from 'react';
import BookCard from './BookCard';
import useStore from '../store/useStore';

export default function BookGrid() {
  const { books } = useStore();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}