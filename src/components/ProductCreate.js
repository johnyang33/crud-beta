import { useState } from 'react';

function ProductCreate({onSubmit}) { 
  const [productData, setProductData] = useState( { title: "", category: "" });

  const handleChange = (e) => {
    setProductData({
      ...productData, [e.target.name]:e.target.value
    });
    console.log(e.target.value);
  }

  const handleSubmit = (e) => { 
    e.preventDefault();
    onSubmit(productData);
    setProductData({ title:"",category:"",description:"",price:"",rating:"",thumbnail:"" })
  }

  return <div>
    <form id="create_product_form" onSubmit={handleSubmit}>
      <input type="text" placeholder="title" value={productData.title} name="title" onChange={handleChange}/>
      <input type="text" placeholder="category" value={productData.category} name="category" onChange={handleChange}/>  
      <input type="text" placeholder="description" value={productData.description} name="description" onChange={handleChange} />
      <input type="text" placeholder="price" value={productData.price} name="price" onChange={handleChange} />
      <input type="text" placeholder="rating" value={productData.rating} name="rating" onChange={handleChange} />
      <input type="text" placeholder="thumbnail" value={productData.thumbnail} name="thumbnail" onChange={handleChange} />
      <button className="submit">submit</button>
    </form></div>
}
export default ProductCreate;