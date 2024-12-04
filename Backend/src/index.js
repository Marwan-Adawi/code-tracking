const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Demo data
const books = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 9.99,
    isbn: '978-0743273565',
    genre: 'Fiction',
    stockQuantity: 10,
    publisher: 'Scribner',
    publishDate: '1925-04-10',
    coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f'
  },
  {
    id: '2',
    title: '1984',
    author: 'George Orwell',
    price: 12.99,
    isbn: '978-0451524935',
    genre: 'Science Fiction',
    stockQuantity: 15,
    publisher: 'Penguin Books',
    publishDate: '1949-06-08',
    coverUrl: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19'
  }
];

// Demo routes
app.get('/api/books', (req, res) => {
  res.json(books);
});

app.get('/api/books/:id', (req, res) => {
  const book = books.find(b => b.id === req.params.id);
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }
  res.json(book);
});

// Demo login route
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  // Demo credentials
  if (email === 'demo@example.com' && password === 'demo123') {
    res.json({
      user: {
        id: '1',
        username: 'Demo User',
        email: 'demo@example.com',
        role: 'user'
      },
      token: 'demo-token-123'
    });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Demo server running on port ${PORT}`);
}); 