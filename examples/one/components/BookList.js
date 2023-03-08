import BookShow from './BookShow';

function BookList({ books, onDelete, onEdit  }){

    const renderedBooks = books.map((book) => {
       return <BookShow onDelete={onDelete} key={book.id} book={book} onEdit={onEdit} ></BookShow>;
    });

    return <div>{renderedBooks}</div>
}

export default BookList;