// Admin.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Admin({ products, setProducts }) {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleEdit = (id) => {
    const newName = prompt('Enter new product name:');
    if (newName) {
      setProducts(
        products.map((product) =>
          product.id === id ? { ...product, name: newName } : product
        )
      );
    }
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
            <button onClick={() => handleEdit(product.id)}>Edit</button>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
}

export default Admin;
