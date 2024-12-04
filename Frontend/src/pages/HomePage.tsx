import React from 'react';
import SearchBar from '../components/SearchBar';
import BookGrid from '../components/BookGrid';

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to BookStore
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover your next favorite book from our carefully curated collection
        </p>
      </div>
      <SearchBar />
      <BookGrid />
    </div>
  );
}