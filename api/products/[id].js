// Vercel Serverless Function - GET single product / PUT update / DELETE
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

  const id = Number(req.query.id);

  if (req.method === 'GET') {
    const products = readProducts();
    const product = products.find(p => p.id === id);
    if (!product) return res.status(404).json({ message: 'Product nahi mila' });
    return res.json(product);
  }

  if (req.method === 'PUT') {
    const products = readProducts();
    const index = products.findIndex(p => p.id === id);
    if (index === -1) return res.status(404).json({ message: 'Product nahi mila' });
    products[index] = { ...products[index], ...req.body, id };
    writeProducts(products);
    return res.json(products[index]);
  }

  if (req.method === 'DELETE') {
    const products = readProducts();
    const filtered = products.filter(p => p.id !== id);
    if (filtered.length === products.length) {
      return res.status(404).json({ message: 'Product nahi mila' });
    }
    writeProducts(filtered);
    return res.json({ message: 'Product delete ho gaya' });
  }

  return res.status(405).json({ message: 'Method not allowed' });
};