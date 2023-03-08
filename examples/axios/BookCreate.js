import { useState } from 'react';

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState('');

  const handleChange = (event) => { 
    setTitle(event.target.value);
  }

  const handleSubmit = (event) => { 
    event.preventDefault();
    onCreate(title);
    setTitle('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input value={title} onChange={handleChange} />
      <button>create book</button>
    </form>
  );

}

export default BookCreate; 