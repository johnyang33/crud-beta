//import ProductFilter from './ProductFilter';

function ProductFilters({filters, updateFilters}) {

  let updatedFilters = filters;

  if( document.getElementById('all_filter') && filters.length === 0 ){
    document.getElementById('all_filter').classList.add('product_filter_on');
  }

  const handleClick = (event) => { 
    if( updatedFilters.includes(event.target.value)){
      let removed = updatedFilters.filter(function(elem){
        return elem !== event.target.value; 
      })
      updatedFilters = removed;
      event.target.classList.remove('product_filter_on');
      if( document.getElementById('all_filter') && updatedFilters.length === 0 ){
        document.getElementById('all_filter').classList.add('product_filter_on');
      }
      updateFilters(updatedFilters);
    }
    else {
      event.target.classList.add('product_filter_on')
      updatedFilters.push(event.target.value);
      if(updatedFilters.length !== 0){
        document.getElementById('all_filter').classList.remove('product_filter_on');
      }
      updateFilters(updatedFilters);
    }
  }
 
  return (
    <div class="product_filters">
      <button id="all_filter" className="product_filter" value="all" onClick={handleClick}>all</button>
      <button id="fragrances_filter" className="product_filter" value="fragrances" onClick={handleClick}>fragrances</button>
      <button id="shoes_filter" className="product_filter" value="mens-shoes" onClick={handleClick}>shoes</button>
      <button id="smartphones_filter" className="product_filter" value="smartphones" onClick={handleClick}>smartphones</button>
    </div>
  )
}

export default ProductFilters;