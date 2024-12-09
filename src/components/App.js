// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Admin from './Admin';
import ProductDetail from './ProductDetail';

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

export default App;
