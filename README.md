# Bookstore Management System

## Project Overview
A comprehensive bookstore management application that handles inventory, sales, and customer interactions.

## Features
- Book inventory management
- Sales tracking
- Customer registration
- Order processing
- Reporting and analytics
- 3D book previews
- Instant search functionality
- Push notifications

## Technologies Used
- Backend:
  - Django: For request handling and data management
  - GraphQL: For efficient data querying
  - PostgreSQL: For storing user and book data
  - Redis: For caching
  - ElasticSearch: For instant search functionality
- Frontend:
  - React.js with TypeScript
  - Tailwind CSS: For fast and responsive design
  - Three.js: For 3D book previews
  - Zustand: For state management
- Additional Technologies:
  - Firebase: For instant push notifications
  - Vite: For fast development and building

## Prerequisites
- Python 3.9+
- Django 4.2+
- PostgreSQL 12+
- Node.js 14+
- npm or yarn

## Installation

### Backend Setup
```bash
# Clone the repository
git clone https://github.com/Marwan-Adawi/Bookstore.git

# Navigate to backend directory
cd bookstore-project/backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate
```

### Frontend Setup
```bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

## Running the Application
1. Start backend server:
```bash
cd backend
python manage.py runserver
```

2. Start frontend development server:
```bash
cd frontend
npm run dev
```

3. Access application at `http://localhost:5173`

## Testing
```bash
# Backend tests
python manage.py test

# Frontend tests
npm test
```

## Building for Production

### Frontend Build
```bash
cd frontend
npm run build
```

### Backend Build
```bash
cd backend
python manage.py collectstatic
```

## Deployment
- Backend: Deployed on Heroku
- Frontend: Deployed on Netlify
- Database: AWS RDS PostgreSQL

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Create a Pull Request

## License
MIT License

## Contact
- Project Lead: Marwan El-Adawi
- Email: marwaneladawii@gmail.com
- Project Link: https://github.com/Marwan-Adawi/Bookstore.git 