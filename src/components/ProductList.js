import Pagination from './Pagination';
import { useState } from 'react';

function ProductList({products, filters, updateFilters}) { 
  const [page, setPage] = useState(1);
  //const [filters, setFilters] = useState([]);

  const selectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= products.length / 10 && selectedPage !== page ) {
      setPage(selectedPage);
    } else if ( selectedPage >= products.length / 10  && products.length % 10 < 10 ){
      setPage(selectedPage);
    }
  }

return (
  <div>
      {products.length > 0 && <div className="products">
        {products.slice(page * 10 - 10, page * 10).map((prod) => {
          return <span className="products__single" key={prod.id}>
            <img src={prod.thumbnail} alt={prod.title} /> {/* alt is imp */}
            <span>
              {prod.title}
            </span>
            <span>
              category: {prod.category}
            </span>
          </span>
        })}
      </div>}
      <Pagination products={products} onPageSelect={selectPageHandler} page={page}/>

  </div>
)
}

export default ProductList;