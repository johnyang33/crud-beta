
import BookItem from './BookItem';

function BookList({books, onEdit, onDelete}) { 

  const renderedBooks = books.map((book) => { 
    return <div key={book.id}><BookItem book={book} onEdit={onEdit} onDelete={onDelete} /></div>
  });

 return <div>{renderedBooks}</div>
}

export default BookList;