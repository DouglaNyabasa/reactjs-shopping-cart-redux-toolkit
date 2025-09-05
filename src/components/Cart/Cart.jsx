import React, { useEffect, useState } from 'react';

const Cart = () => {
   const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products') // Adjust the URL as needed
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <p>{product.brand}</p>
            <p>{product.desc}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
