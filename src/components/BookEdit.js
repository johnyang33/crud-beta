import { useState } from 'react';

function BookEdit( {book, onSubmit} ) { 
  const [title,setTitle] = useState(book.title);

  const handleChange = (event) => { 
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => { 
    event.preventDefault();
    onSubmit(book.id, title)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>title:</label>
      <input value={title} onChange={handleChange}/>
      <button>save</button>
    </form>
  )
}

export default BookEdit;