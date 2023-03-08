import { useState } from 'react';
function BookEdit({book, onEdit, onSubmit}) { 
  
  const[title,setTitle] = useState(book.title);
  
  const handleChange = (event) => { 
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //onEdit(book.id, title);
    onSubmit(book.id,title);
  };

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label>book title:</label>
        <input value={title} onChange={handleChange} />
        <button>save</button>
      </form>
    </div>
  )
  
}

export default BookEdit;