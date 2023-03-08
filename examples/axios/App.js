import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data);
  }

  useEffect(()=> { 
    fetchBooks();
  }, []);

  const editBookById = async (id, newTitle) => {

    const response = await axios.put(`http://localhost:3001/books/${id}`, { 
      'title': newTitle 
    });

    console.log(response);

    const updatedBooks = books.map((book) => { 
      if( book.id === id ){

        // with response
        return {...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  }

    // traverses array of book objects and returns a new list of objects without that book with
    // the matching id
  const deleteBookById = async (id) => { 
    
     await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => { 
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const createBook = async (title) => { 
    const response = await axios.post('http://localhost:3001/books', {
      title,
    });

    const updatedBooks = [
      ...books, response.data
    ];
    setBooks(updatedBooks);
  };

 return (
  <div>
  <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
    <BookCreate onCreate={createBook} />
  </div>
 );
}

export default App;
