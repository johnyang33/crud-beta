import { useState } from 'react';

function ProductSort({onSort}) { 
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  const handleClick = (event) => { 
    // if(sortBy && sortBy !== event.target.value )
    // {
    //   setSortOrder("asc");
    //   setSortBy(event.target.value);
    //   return;
    // }
    setSortBy(event.target.value);
    setSortOrder("asc");
    onSort(event.target.value, sortOrder);
    setSortBy(event.target.value);
    console.log("newSortBy:", event.target.value);
  }

  console.log('sortBy:', sortBy)

  return <div className="sort_container">
      <button className="sort" value="price" onClick={handleClick}>sort by Price</button>
      <button className="sort" value="name" onClick={handleClick}>sort by Name</button>
    </div>
}

export default ProductSort;