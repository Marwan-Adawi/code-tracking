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
  publisher?: string;
  publishDate?: string;
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
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
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
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  method: 'credit_card' | 'paypal' | 'other';
  createdAt: Date;
} 