// Vercel Serverless Function - GET all products / POST new product
const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(process.cwd(), 'backend', 'products.json');

function readProducts() {
  const data = fs.readFileSync(DATA_FILE, 'utf8');
  return JSON.parse(data);
}

function writeProducts(products) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(products, null, 2));
}

module.exports = async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    return res.json(readProducts());
  }

  if (req.method === 'POST') {
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
    return res.status(201).json(newProduct);
  }

  return res.status(405).json({ message: 'Method not allowed' });
};