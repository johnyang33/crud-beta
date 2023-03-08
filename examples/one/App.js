import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import { useState } from 'react';

function App() {
  const [books, setBooks] = useState([]);

  const editBookById = (id, newTitle) => {

    // traverses through the array of book objects and looks for the book with the matching id
    // when that book is found, we replace that object's book title with newTitle
    const updatedBooks = books.map((book) => { 
      if( book.id === id ){
        //takes all the existing properties of the book and puts the new title in
        // then continues traversing the array of book objects
        return {...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  }

    // traverses array of book objects and returns a new list of objects without that book with
    // the matching id
  const deleteBookById = (id) => { 
    const updatedBooks = books.filter((book) => { 
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const createBook =  (title) => { 

    const updatedBooks = [
      ...books,{ 
        id: Math.round(Math.random()*9999),
        title,
      }
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
