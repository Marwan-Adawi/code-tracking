export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  isbn: string;
  genre: string;
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
  id: string;
  book: Book;
  quantity: number;
  unitPrice: number;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  totalAmount: number;
  status: 'pending' | 'completed' | 'cancelled';
  createdAt: Date;
}

export interface Review {
  id: string;
  userId: string;
  bookId: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

export interface Payment {
  id: string;
  orderId: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  method: 'credit_card' | 'paypal' | 'other';
  createdAt: Date;
} 