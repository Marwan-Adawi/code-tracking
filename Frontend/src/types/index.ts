export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  isbn: string;
  description: string;
  coverUrl: string;
  rating: number;
  stock: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

export interface CartItem {
  book: Book;
  quantity: number;
}