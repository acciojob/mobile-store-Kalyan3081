// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Home({ products }) {
  return (
    <div>
      <h1>Mobile Store</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
