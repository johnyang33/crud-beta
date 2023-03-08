import BookEdit from './BookEdit';
import { useState } from 'react';

function BookShow({ book, onDelete, onEdit }) { 
  const [showEdit, setShowEdit] = useState(false);

  const bookStyle = {
    border: "1px solid blue",
    padding: "5px",
    width:"300px",
    marginBottom:"20px"
  };

  const handleDeleteClick = () => { 
    onDelete(book.id);
  };

  const handleEditClick = () => { 
    setShowEdit(!showEdit);
  }

  const handleSubmit = (id, newTitle) => { 
    setShowEdit(!showEdit);
    onEdit(id,newTitle);
  }

  let content = <h3>{book.title}</h3>
  if( showEdit) { 
    content = <BookEdit onEdit={onEdit} book={book} onSubmit={handleSubmit} />
  }

  return(
    <div style={bookStyle}> 
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={handleDeleteClick}>delete</button>
      {content}
    </div>
  );
}

export default BookShow;