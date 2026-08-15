// backend/server.js -- Step 3: Complete CRUD API
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'products.json');

app.use(cors()); // CORS fix - frontend ko backend se connect karne ke liye
app.use(express.json()); // JSON body parse karne ke liye

// Frontend static files serve karo (CSS, JS, HTML)
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// Helper: file se saare products parhein
function readProducts() {
  const data = fs.readFileSync(DATA_FILE, 'utf8');
  return JSON.parse(data);
}

// Helper: products ko file me save karein
function writeProducts(products) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(products, null, 2));
}

// READ: saare products
app.get('/api/products', (req, res) => {
  res.json(readProducts());
});

// READ: ek product (id se)
app.get('/api/products/:id', (req, res) => {
  const products = readProducts();
  const product = products.find(p => p.id === Number(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product nahi mila' });
  res.json(product);
});

// CREATE: naya product add
app.post('/api/products', (req, res) => {
  const products = readProducts();
  const newProduct = {
    id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
    name: req.body.name,
    price: Number(req.body.price),
    stock: Number(req.body.stock),
    category: req.body.category
  };
  products.push(newProduct);
  writeProducts(products);
  res.status(201).json(newProduct);
});

// UPDATE: product badlo
app.put('/api/products/:id', (req, res) => {
  const products = readProducts();
  const index = products.findIndex(p => p.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Product nahi mila' });
  products[index] = { ...products[index], ...req.body, id: Number(req.params.id) };
  writeProducts(products);
  res.json(products[index]);
});

// DELETE: product hatao
app.delete('/api/products/:id', (req, res) => {
  const products = readProducts();
  const filtered = products.filter(p => p.id !== Number(req.params.id));
  if (filtered.length === products.length) {
    return res.status(404).json({ message: 'Product nahi mila' });
  }
  writeProducts(filtered);
  res.json({ message: 'Product delete ho gaya' });
});

app.listen(PORT, () => {
  console.log('Server chal raha hai: http://localhost:' + PORT);
});