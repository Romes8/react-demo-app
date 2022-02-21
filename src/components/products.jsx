import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import Posts from "./posts";
import Pagination from "./pagination";



function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProducstPerPage] = useState(10);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      setProducts(res.data);
      setLoading(false);
    };
    fetchProducts();
  }, []);  //empty set to run only once

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct,indexOfLastProduct);

  const paginate = pageNumber => setCurrentPage(pageNumber);


  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Products</h1>
      
      <ul className="list-group mb-4">
        {currentProducts.map(product => (
          <li key={product.id} className="list-group-item">
            {product.id} - {product.title}
          </li>
        ))}
      </ul>
      <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate} />
    </div>
  );
}

export default Products;
