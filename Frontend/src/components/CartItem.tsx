import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../types';
import useStore from '../store/useStore';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useStore();
  const { book, quantity } = item;

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity > 0 && newQuantity <= book.stock) {
      updateQuantity(book.id, newQuantity);
    }
  };

  return (
    <div className="flex items-center gap-4 py-4 border-b border-gray-200">
      <img
        src={book.coverUrl}
        alt={book.title}
        className="w-24 h-32 object-cover rounded-md"
      />
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-gray-900">{book.title}</h3>
        <p className="text-sm text-gray-600">by {book.author}</p>
        <p className="text-indigo-600 font-semibold mt-1">
          ${book.price.toFixed(2)}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleQuantityChange(quantity - 1)}
          className="p-1 rounded-md hover:bg-gray-100"
          disabled={quantity <= 1}
        >
          <Minus className="h-4 w-4 text-gray-600" />
        </button>
        <span className="w-8 text-center">{quantity}</span>
        <button
          onClick={() => handleQuantityChange(quantity + 1)}
          className="p-1 rounded-md hover:bg-gray-100"
          disabled={quantity >= book.stock}
        >
          <Plus className="h-4 w-4 text-gray-600" />
        </button>
      </div>
      <div className="text-right min-w-[100px]">
        <p className="font-semibold text-gray-900">
          ${(book.price * quantity).toFixed(2)}
        </p>
      </div>
      <button
        onClick={() => removeFromCart(book.id)}
        className="p-2 text-red-600 hover:bg-red-50 rounded-md"
      >
        <Trash2 className="h-5 w-5" />
      </button>
    </div>
  );
}