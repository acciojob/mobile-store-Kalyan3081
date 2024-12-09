// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

const productsData = [
  { id: 1, name: 'iPhone 14', description: 'Apple iPhone 14 with A15 Bionic chip', price: '$999' },
  { id: 2, name: 'Samsung Galaxy S22', description: 'Samsung Galaxy S22 with Snapdragon 8 Gen 1', price: '$899' },
  { id: 3, name: 'Google Pixel 7', description: 'Google Pixel 7 with Tensor G2 chip', price: '$799' },
];

function App() {
  const [products, setProducts] = useState(productsData);

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/admin">Admin</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/products/:id" element={<ProductDetail products={products} />} />
        <Route
          path="/admin"
          element={<Admin products={products} setProducts={setProducts} />}
        />
      </Routes>
    </Router>
  );
}

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

function ProductDetail({ products }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

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

export default App;
