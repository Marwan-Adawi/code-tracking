import { create } from 'zustand';
import { Book, User, CartItem } from '../types';

interface StoreState {
  books: Book[];
  cart: CartItem[];
  user: User | null;
  addToCart: (book: Book) => void;
  removeFromCart: (bookId: string) => void;
  updateQuantity: (bookId: string, quantity: number) => void;
  setUser: (user: User | null) => void;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const useStore = create<StoreState>((set) => ({
  books: [
    {
      id: '1',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      price: 9.99,
      isbn: '978-0743273565',
      genre: 'Fiction',
      description: 'A story of decadence and excess...',
      coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400',
      rating: 4.5,
      stock: 10
    },
    {
      id: '2',
      title: '1984',
      author: 'George Orwell',
      price: 12.99,
      isbn: '978-0451524935',
      genre: 'Science Fiction',
      description: 'A dystopian social science fiction novel...',
      coverUrl: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=400',
      rating: 4.8,
      stock: 8
    },
    {
      id: '3',
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      price: 8.99,
      isbn: '978-0141439518',
      genre: 'Romance',
      description: 'A romantic novel following the emotional development...',
      coverUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=400',
      rating: 4.7,
      stock: 15
    }
  ],
  cart: [],
  user: null,

  addToCart: (book) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.book.id === book.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.book.id === book.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, {
          id: Date.now().toString(),
          book,
          quantity: 1,
          unitPrice: book.price
        }]
      };
    }),

  removeFromCart: (bookId) =>
    set((state) => ({
      ...state,
      cart: state.cart.filter((item) => item.book.id !== bookId),
    })),

  updateQuantity: (bookId, quantity) =>
    set((state) => ({
      ...state,
      cart: state.cart.map((item) =>
        item.book.id === bookId ? { ...item, quantity } : item
      ),
    })),

  setUser: (user) => set({ user }),

  login: async (email: string, password: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    if (email === 'demo@example.com' && password === 'password') {
      set({
        user: {
          id: '1',
          name: 'Demo User',
          email: 'demo@example.com',
          isAdmin: false
        }
      });
    } else {
      throw new Error('Invalid credentials');
    }
  },

  register: async (name: string, email: string, password: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    set({
      user: {
        id: Date.now().toString(),
        name,
        email,
        isAdmin: false
      }
    });
  },

  logout: () => set({ user: null, cart: [] })
}));

export default useStore;