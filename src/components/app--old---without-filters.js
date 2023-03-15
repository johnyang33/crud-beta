import { useEffect, useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import ProductFilters from './components/ProductFilters';

function App() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=100`);
    const data = await res.json();
    setProducts(data.products);
    setFilteredProducts(data.products);
  }

  useEffect(() => {
    fetchProducts()
  }, []);

  const filterProducts = (products, filters) => { 
    if(filters.length === 0){
      setFilteredProducts(products);
    } else {
      let newProducts = products;
      newProducts = products.filter(product => filters.includes(product.category));
      setFilteredProducts(newProducts);
    }
  }

  const updateFilters = (currentFilters) => { 
    filterProducts(products, currentFilters);
    setFilters(currentFilters);
  };

  return (
    <div>
      <ProductList products={filteredProducts} updateFilters={updateFilters} />
      <ProductFilters filters={filters} updateFilters={updateFilters} />
  </div>
  )
}

export default App;