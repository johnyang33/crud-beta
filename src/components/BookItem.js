import { useState } from 'react';
import BookEdit from './BookEdit';

function BookItem( { book, onEdit, onDelete }) { 
  const [showEdit, setShowEdit] = useState(false);

  const handleClick = () => { 
    console.log('showedit');
    setShowEdit(!showEdit);
  }

  const handleSubmit = (id,title) => { 
    setShowEdit(!showEdit);
    onEdit(id,title);
  }

  const handleDelete = () => { 
    onDelete(book.id);
  }

  let content = <div>{book.title}<button onClick={handleClick}>edit</button><button onClick={handleDelete}>delete</button></div>;

  if( showEdit ){
    content = <BookEdit book={book} onEdit={onEdit} onSubmit={handleSubmit} />
  }

  return <div>{content}</div>;
}

export default BookItem;