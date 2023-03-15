function ProductFilter({ category, status }) {
  console.log('category:',category,'status:',status);

  if (category === "all"){
    return <button class="product_filter">{category}</button>
  }
}

export default ProductFilter;