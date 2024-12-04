import pytest

class Book:
    def __init__(self, title, author, price, isbn, stock, genre, description, coverUrl, rating):
        self.title = title
        self.author = author
        self.price = price
        self.isbn = isbn
        self.stock = stock
        self.genre = genre
        self.description = description
        self.coverUrl = coverUrl
        self.rating = rating

@pytest.fixture
def sample_book():
    return Book(
        title="Test Book",
        author="Test Author",
        price=9.99,
        isbn="1234567890",
        stock=10,
        genre="Fiction",
        description="A test book",
        coverUrl="http://example.com/cover.jpg",
        rating=4.5
    )

def test_basic():
    """Basic test to ensure testing setup works"""
    assert True

def test_book_model(sample_book):
    """Test basic book model functionality"""
    assert sample_book.title == "Test Book"
    assert sample_book.author == "Test Author"
    assert sample_book.price == 9.99
    assert sample_book.isbn == "1234567890"
    assert sample_book.stock == 10
    assert sample_book.genre == "Fiction"
    assert sample_book.description == "A test book"
    assert sample_book.coverUrl == "http://example.com/cover.jpg"
    assert sample_book.rating == 4.5 