import { useEffect, useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import ProductFilters from './components/ProductFilters';
import ProductCreate from './components/ProductCreate';
import axios from 'axios';
import ProductSort from './components/ProductSort';

function App() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);


  const fetchProducts = async () => {
    const res = await fetch(`http://localhost:3001/products`);
    // const res = await fetch(`https://dummyjson.com/products?limit=100`);
    const data = await res.json();
    setProducts(data);
    setFilteredProducts(data);
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

  const createProduct = async (data) => { 

    const response = await axios.post('http://localhost:3001/products', { 
      title:data.title,
      category:data.category,
      price:data.price,
      rating:data.rating,
      description:data.description,
      thumbnail:data.thumbnail
    })

    console.log('title:', data.title);
    console.log('category:', data.category);
    console.log('price:', data.price);
    console.log('rating:', data.rating);
    console.log('description:', data.description);
    console.log('thumbnail:',data.thumbnail);

    const updatedProducts = [...products, response.data];
    setProducts(updatedProducts);
    fetchProducts();
    setFilters([]);
  }

  const handleSort = (newSortBy, newSortOrder) => { 

    if (newSortBy === "name") {
      console.log("name-sorted",newSortOrder);
      let sortedData =  [...products].sort(function(a, b) {
        const sortA = a.title.toUpperCase(); // ignore upper and lowercase
        const sortB = b.title.toUpperCase(); // ignore upper and lowercase
        if (sortA > sortB) {
          return -1;
        }
        if (sortA < sortB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
      console.log("sorted products:",sortedData);
      setFilteredProducts(sortedData);
    }    
    else if (newSortBy === "price") {
      console.log("price-sorted");
      let sortedData =  [...products].sort(function(a, b) {
        const sortA = a.price.toUpperCase(); // ignore upper and lowercase
        const sortB = b.price.toUpperCase(); // ignore upper and lowercase
        if (sortA > sortB) {
          return -1;
        }
        if (sortA < sortB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
      console.log("sorted products:",sortedData);
      setFilteredProducts(sortedData);
    }      
  }

  // sort by name

  console.log('App.js rendered');

  return (
    <div>
      <ProductCreate onSubmit={createProduct}/>
      <ProductList products={filteredProducts} updateFilters={updateFilters} />
      <ProductSort onSort={handleSort}/>
      <ProductFilters filters={filters} updateFilters={updateFilters} />
  </div>
  )
}

export default App;